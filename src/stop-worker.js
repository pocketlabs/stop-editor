var EDITOR_BASE="https://editor.stop-lang.org";
// var EDITOR_BASE="http://localhost:8000";
var Honey = { 'requirePath': ['/lib/'] };

importScripts(EDITOR_BASE + "/src/worker-base.js");
ace.define('ace/worker/stop-worker',["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(requireLocal, exports, module) {
    "use strict";

    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var ace_require = require;
    require = undefined;

     // walk up to js folder, see Honey docs

    importScripts(EDITOR_BASE + "/lib/require.js");

    var antlr4, stop;
    try {
        antlr4 = require('antlr4/index');
        stop = require('stop/index');
    } finally {
        require = ace_require;
    }

    var StopWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        this.$dialect = null;
    };

    oop.inherits(StopWorker, Mirror);

    var AnnotatingErrorListener = function(annotations) {
        antlr4.error.ErrorListener.call(this);
        this.annotations = annotations;
        return this;
    };
    
    AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
    AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;
    
    AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
        this.annotations.push({
            row: line - 1,
            column: column,
            text: msg,
            type: "error"
     });
    };

    function getEnclosingScopeWithLine(scope){
        if (scope.line){
            return scope;
        }
        if (scope.enclosingScope){
            return getEnclosingScopeWithLine(scope.enclosingScope);
        }
        return undefined;
    }

    var Scope = function(scope){
        this.enclosingScope = scope;
        this.definitions = {};
    };
    Scope.prototype.constructor = Scope;
    Scope.prototype.define = function(symbol){
        if (symbol == undefined){
            return;
        }
        if (symbol.name == undefined){
            return;
        }
        var name = symbol.name;
        if (this.definitions[name] != undefined){
            var line = 1;
            var lineScope = getEnclosingScopeWithLine(this);
            if(lineScope){
                line = lineScope.line;
            }
            throw {line: line, message: name+ " is already defined"};
        }
        this.definitions[name] = symbol;
    };

    var ModelSymbol = function(ctx, enclosingScope){
        this.name = ctx.MODEL_TYPE().getText();
        this.async = false;
        this.stop = false;
        this.start = false;
        this.asyncReturnType = undefined;
        this.queue = false;
        this.errorTypes = [];
        this.transitions = [];
        this.enqueues = [];
        this.timeout = 0;
        this.line = ctx.start.line;
        this.enclosingScope = enclosingScope;
        this.definitions = {};
        if(ctx.START() != null) {
            this.start = true;
        }else if(ctx.STOP() != null) {
            this.stop = true;
        }else if(ctx.ASYNC() != null) {
            this.async = true;
        }else if(ctx.QUEUE() != null) {
            this.queue = true;
        }
        if (ctx.return_type()!=null){
            this.asyncReturnType = ctx.return_type().getText();
        }
    };
    ModelSymbol.prototype = Object.create(Scope.prototype);
    ModelSymbol.prototype.constructor = ModelSymbol;

    var EnumSymbol = function(ctx, enclosingScope){
        this.name = ctx.enum_type().MODEL_TYPE().getText();
        this.enclosingScope = enclosingScope;
        this.values = [];
        this.definitions = {};
    };
    EnumSymbol.prototype = Object.create(Scope.prototype);
    EnumSymbol.prototype.constructor = EnumSymbol;

    var TransitionSymbol = function(ctx, enclosingScope){
        this.name = ctx.MODEL_TYPE().getText();
        this.enclosingScope = enclosingScope;
        this.definitions = {};
    };
    TransitionSymbol.prototype = Object.create(Scope.prototype);
    TransitionSymbol.prototype.constructor = TransitionSymbol;

    var EnqueueSymbol = function(ctx, enclosingScope){
        this.name = ctx.MODEL_TYPE().getText();
        this.enclosingScope = enclosingScope;
        this.definitions = {};
    };
    EnqueueSymbol.prototype = Object.create(Scope.prototype);
    EnqueueSymbol.prototype.constructor = EnqueueSymbol;

    var ScalarFieldSymbol = function(name, typeName){
        this.name = name;
        this.typeName = typeName;
        this.asyncSource = undefined;
        this.asyncSourceMapping = undefined;
        this.optional = false;
    };
    ScalarFieldSymbol.prototype.constructor = ScalarFieldSymbol;

    var ModelFieldSymbol = function(name, typeName){
        this.name = name;
        this.typeName = typeName;
        this.asyncSource = undefined;
        this.asyncSourceMapping = undefined;
        this.optional = false;
    };
    ModelFieldSymbol.prototype.constructor = ModelFieldSymbol;

    var CollectionFieldSymbol = function(name, typeName){
        this.name = name;
        this.typeName = typeName;
        this.asyncSource = undefined;
        this.asyncSourceMapping = undefined;
        this.optional = false;
    };
    CollectionFieldSymbol.prototype.constructor = CollectionFieldSymbol;
    
    var DefPhase = function(listener) {
        stop.StopListener.StopListener.call(this); // inherit default listener
        this.errors = [];
        this.listener = listener;
        this.globals = undefined;
        this.scopes = [];
        this.currentScope = undefined;
        return this;
    };
    DefPhase.prototype = Object.create(stop.StopListener.StopListener.prototype);
    DefPhase.prototype.constructor = DefPhase;
    DefPhase.prototype.saveScope = function(ctx, s) { 
        this.scopes[ctx] = s;
    };
    DefPhase.prototype.enterFile = function(ctx) { 
        this.globals = new Scope();
        this.currentScope = this.globals;
    };
    DefPhase.prototype.enterModel = function(ctx) { 
        if (ctx.MODEL_TYPE() == null){
            return;
        }  
        var modelName = ctx.MODEL_TYPE().getText();
        var modelSymbol = new ModelSymbol(ctx, this.currentScope);
        this.currentScope.define(modelSymbol);
        this.saveScope(ctx, modelSymbol);
        this.currentScope = modelSymbol;
    };
    DefPhase.prototype.exitModel = function(ctx) {
        var modelSymbol = this.currentScope;
        if (modelSymbol.async && (modelSymbol.timeout == 0)){
            this.errors.push("Asynchronous states " + modelSymbol.name + " must have a timeout defined");
            this.listener.annotations.push({
                row: modelSymbol.line - 1,
                column: 0,
                text: "Asynchronous states " + modelSymbol.name + " must have a timeout defined",
                type: "error"
            });
        }
        this.currentScope = this.globals;
    };
    DefPhase.prototype.exitTimeout = function(ctx) {
        var modelSymbol = this.currentScope;
        var numberString = ctx.NUMBER().getText();
        var timeout = parseInt(numberString);
        if (modelSymbol.timeout > 0){
            this.errors.push("Timeout already defined for " + modelSymbol.name);
            this.listener.annotations.push({
                row: modelSymbol.line - 1,
                column: 0,
                text: "Timeout already defined for " + modelSymbol.name,
                type: "error"
            });
        }else {
            modelSymbol.timeout = timeout;
        }
    };
    DefPhase.prototype.exitThrow_parameter = function(ctx) {
        var modelSymbol = this.currentScope;
        if (ctx.MODEL_TYPE()!=null){
            modelSymbol.errorTypes.push(ctx.MODEL_TYPE().getText());
        }
    };
    DefPhase.prototype.enterEnumeration = function(ctx) {
        var enumSymbol = new EnumSymbol(ctx, this.currentScope);
        this.currentScope.define(enumSymbol);
        this.saveScope(ctx, enumSymbol);
        this.currentScope = enumSymbol;
    };
    DefPhase.prototype.exitEnumeration = function(ctx) {
        this.currentScope = this.currentScope.enclosingScope;
    };
    DefPhase.prototype.exitEnum_value = function(ctx) {
        var enumValue = ctx.MODEL_TYPE().getText();
        var enumSymbol = this.currentScope;
        enumSymbol.values.push(enumValue);
    };
    DefPhase.prototype.exitField = function(ctx) {
        var fieldName = ctx.ID().getText();
        var field = null;
        if (ctx.type() != null && ctx.type().model_type() != null) {
            var modelName = ctx.type().model_type().getText();
            field = new ModelFieldSymbol(fieldName, modelName);
        }else if (ctx.type()!=null && ctx.type().scalar_type() != null){
            var typeName = ctx.type().scalar_type().getText();
            field = new ScalarFieldSymbol(fieldName, typeName);
        }else if (ctx.collection() != null && ctx.collection().type() != null){
            var typeName = ctx.collection().type().getText();
            field = new CollectionFieldSymbol(fieldName, typeName);
        }
        if(field != null){
            if (ctx.async_source() != null){
                var asyncModel = ctx.async_source().MODEL_TYPE().getText();
                field.asyncSource = asyncModel;

                if (ctx.async_source().async_source_mapping() != null){
                    var asyncSourceMapping = {};
                    for (var parameterIndex in ctx.async_source().async_source_mapping().async_source_mapping_parameter()){
                        var parameterContext = ctx.async_source().async_source_mapping().async_source_mapping_parameter()[parameterIndex];
                        asyncSourceMapping[parameterContext.ID().getText()] = parameterContext.async_source_mapping_parameter_rename().ID().getText();
                    }
                    field.asyncSourceMapping = asyncSourceMapping;
                }
            }
            if ( ctx.OPTIONAL() != null){
                field.optional = true;
            }
            this.currentScope.define(field);
        }
    };
    DefPhase.prototype.exitTransition = function(ctx) {
        var transitionSymbol = new TransitionSymbol(ctx, this.currentScope);
        this.currentScope.define(transitionSymbol);
    };
    DefPhase.prototype.exitEnqueue = function(ctx) {
        var enqueueSymbol = new EnqueueSymbol(ctx, this.currentScope);
        this.currentScope.define(enqueueSymbol);
    };
    DefPhase.prototype.exitThrow_parameter = function(ctx) {
        var modelSymbol = this.currentScope;
        modelSymbol.errorTypes.push(ctx.MODEL_TYPE().getText());
    };

    var RefPhase = function(listener, globals, scopes) {
        stop.StopListener.StopListener.call(this); // inherit default listener
        this.errors = [];
        this.listener = listener;
        this.globals = globals;
        this.scopes = scopes;
        this.currentScope = undefined;
        return this;
    };
    RefPhase.prototype = Object.create(stop.StopListener.StopListener.prototype);
    RefPhase.prototype.constructor = RefPhase;
    RefPhase.prototype.enterFile = function(ctx) {
        this.currentScope = this.globals;
    };
    RefPhase.prototype.enterModel = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            this.currentScope = this.globals.definitions[ctx.MODEL_TYPE().getText()];
        }
    };
    RefPhase.prototype.exitModel = function(ctx) {
        this.currentScope = this.currentScope.enclosingScope;
    };
    RefPhase.prototype.exitField = function(ctx) {
        var name = ctx.ID().symbol.text;
        var symbol = this.currentScope.definitions[name];
        if (symbol instanceof ModelFieldSymbol){
            var modelName = symbol.typeName;
            var modelSymbol = this.globals.definitions[modelName];
            var enumSymbol = this.currentScope.definitions[modelName];
            if(modelSymbol == undefined){
                if ((enumSymbol != undefined) && (enumSymbol instanceof EnumSymbol)){
                    // Found symbol
                } else {
                    var lineScope = getEnclosingScopeWithLine(this.currentScope);
                    var line = 1;
                    if (lineScope){
                        line = lineScope.line;
                    }
                    this.errors.push({line: line, message: "Couldn't define field \""+
                            name +"\" because " + modelName + " isn't defined"});
                }
            }
        }
        if (symbol instanceof CollectionFieldSymbol){
            var modelName = symbol.typeName;
            var modelSymbol = this.globals.definitions[modelName];
            var enumSymbol = this.currentScope.definitions[modelName];
            if(modelSymbol == undefined){
                if ((enumSymbol != undefined) && (enumSymbol instanceof EnumSymbol)){
                    // Found symbol
                } else {
                    var lineScope = getEnclosingScopeWithLine(this.currentScope);
                    var line = 1;
                    if (lineScope){
                        line = lineScope.line;
                    }
                    this.errors.push({line: line, message: "Couldn't define field \""+
                            name +"\" because " + modelName + " isn't defined"});
                }
            }
        }
        if (ctx.async_source() != null){
            var modelName = ctx.async_source().MODEL_TYPE().getText();
            var modelSymbol = this.globals.definitions[modelName];
            if(modelSymbol == undefined){
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                    var line = 1;
                    if (lineScope){
                        line = lineScope.line;
                    }
                this.errors.push({line: line, message: "Couldn't define field \""+
                        name +"\" because " + modelName + " isn't defined"});
            }else{
                var typeString = null;
                if (ctx.type()!=null){
                    typeString = ctx.type().getText();
                }
                if (ctx.collection()!=null){
                    typeString = ctx.collection().getText();
                }
                if(typeString!=null){
                    if (modelSymbol.asyncReturnType!=undefined){
                        if (typeString != (modelSymbol.asyncReturnType)){
                            var lineScope = getEnclosingScopeWithLine(this.currentScope);
                            var line = 1;
                            if (lineScope){
                                line = lineScope.line;
                            }
                            this.errors.push({line: line, message: "Couldn't define field \""+
                                    name +"\" because "
                                    + typeString + " doesn't match async return type of "
                                    + modelSymbol.asyncReturnType});
                        }
                    }else {
                        var lineScope = getEnclosingScopeWithLine(this.currentScope);
                            var line = 1;
                            if (lineScope){
                                line = lineScope.line;
                            }
                            this.errors.push({line: line, message: "Couldn't define field \""+
                                    name +"\" because "
                                    + modelSymbol.name + " doesn't have a return type defined"});
                    }
                }
                for (var s in modelSymbol.definitions){
                    var fieldSymbol = modelSymbol.definitions[s];

                    if ((fieldSymbol instanceof ScalarFieldSymbol) 
                        || (fieldSymbol instanceof ModelFieldSymbol) 
                        || (fieldSymbol instanceof CollectionFieldSymbol) ){
                        var fieldName = fieldSymbol.name;

                        if (symbol["asyncSourceMapping"]) {
                            for (var asyncSourceMappingKey in symbol.asyncSourceMapping){
                                if (asyncSourceMappingKey == fieldName){
                                    fieldName = symbol.asyncSourceMapping[fieldName];
                                }
                            }
                        }

                        var currentScopeProperty = this.currentScope.definitions[fieldName];
                        if (currentScopeProperty != null){
                            if (currentScopeProperty.typeName != fieldSymbol.typeName){
                                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                                var line = 1;
                                if (lineScope){
                                    line = lineScope.line;
                                }
                                this.errors.push({line: line, message: "Couldn't define field \""+
                                        name +"\" because "
                                        + fieldSymbol.name + " mapping to " + fieldName + " doesn't match required type " + fieldSymbol.typeName});
                            }
                            if (currentScopeProperty.optional && !fieldSymbol.optional && !symbol.optional){
                                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                                var line = 1;
                                if (lineScope){
                                    line = lineScope.line;
                                }
                                this.errors.push({line: line, message: "Couldn't define field \""+
                                        name +"\" because "
                                        + fieldName + " is optional and " + symbol.name + " is not optional"});
                            }
                        } else if (!fieldSymbol.optional) {
                            var lineScope = getEnclosingScopeWithLine(this.currentScope);
                            var line = 1;
                            if (lineScope){
                                line = lineScope.line;
                            }
                            this.errors.push({line: line, message: "Couldn't define field \""+
                                    name +"\" because "
                                    + fieldSymbol.name + " cannot be mapped within " + this.currentScope.name});
                        }
                    }
                }
            }
        }
    };
    RefPhase.prototype.exitTransition = function(ctx) {
        var modelName = ctx.MODEL_TYPE().getText();
        var modelSymbol = this.globals.definitions[modelName];
        if(modelSymbol == undefined){
            var lineScope = getEnclosingScopeWithLine(this.currentScope);
            var line = 1;
            if (lineScope){
                line = lineScope.line;
            }
            this.errors.push({line: line, message: "Couldn't define transition because " + modelName + " isn't defined"});
        }
    };
    RefPhase.prototype.exitEnqueue = function(ctx) {
        var modelName = ctx.MODEL_TYPE().getText();
        var modelSymbol = this.globals.definitions[modelName];
        if(modelSymbol == undefined){
            var lineScope = getEnclosingScopeWithLine(this.currentScope);
            var line = 1;
            if (lineScope){
                line = lineScope.line;
            }
            this.errors.push({line: line, message: "Couldn't define enqueue because " + modelName + " isn't defined"});
        }
    };
    RefPhase.prototype.exitReturn_type = function(ctx) {
        if (ctx.type()!=null){
            if(ctx.type().model_type() != null){
                var modelName = ctx.type().model_type().MODEL_TYPE().getText();
                var modelSymbol = this.globals.definitions[modelName];
                if(modelSymbol == undefined){
                    var line = 1;
                    if (this.currentScope.line){
                        line = this.currentScope.line;
                    }
                    this.errors.push({line: line, message: "Couldn't define return type because " + modelName + " isn't defined"});
                }
            }
        }
        if (ctx.collection() != null){
            if (ctx.collection().type().model_type() != null){
                var modelName = ctx.collection().type().model_type().MODEL_TYPE().getText();
                var modelSymbol = this.globals.definitions[modelName];
                if(modelSymbol == undefined){
                    var line = 1;
                    if (this.currentScope.line){
                        line = this.currentScope.line;
                    }
                    this.errors.push({line: line, message: "Couldn't define return collection type because " + modelName + " isn't defined"});
                }
            }
        }
    };
    RefPhase.prototype.exitThrow_parameter = function(ctx) {
        if (ctx.MODEL_TYPE()!=null){
            var modelName = ctx.MODEL_TYPE().getText();
            var modelSymbol = this.globals.definitions[modelName];
            if(modelSymbol == undefined){
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                var line = 1;
                if (lineScope){
                    line = lineScope.line;
                }
                this.errors.push({line: line, message: "Couldn't define throw parameter because " + modelName + " isn't defined"});
            }
        }
    };
    RefPhase.prototype.exitTimeout = function(ctx) {
        if (ctx.transition().MODEL_TYPE()!=null){
            var modelName = ctx.transition().MODEL_TYPE().getText();
            var modelSymbol = this.globals.definitions[modelName];
            var lineScope = getEnclosingScopeWithLine(this.currentScope);
            var line = 1;
            if (lineScope){
                line = lineScope.line;
            }

            if(modelSymbol == undefined){
                this.errors.push({line: line, message: "Couldn't define throw parameter because " + modelName + " isn't defined"});
            }
            if (modelSymbol instanceof ModelSymbol) {
                var fieldCount = 0;
                for (var i in modelSymbol.definitions){
                    var f = modelSymbol.definitions[i];
                    if ((f instanceof ModelSymbol)
                        || (f instanceof ScalarFieldSymbol)
                        || (f instanceof CollectionFieldSymbol)
                        ){
                        fieldCount = fieldCount + 1;
                    }
                }
                if (fieldCount > 0){
                    var timedOutStateSymbol = modelSymbol.definitions["timedOutState"];
                    if (timedOutStateSymbol != undefined){
                        if (timedOutStateSymbol instanceof ModelFieldSymbol){
                            if (!(timedOutStateSymbol.typeName == this.currentScope.name)){
                                this.errors.push({line: line, message: "Couldn't define timeout transition because timedOutState has type " + timedOutStateSymbol.typeName + " instead of " + currentScope.name});
                            }
                        }else {
                            this.errors.push({line: line, message: "Couldn't define timeout transition because timedOutState not defined as type "+ currentScope.name});
                        }
                    }else{
                        this.errors.push({line: line, message: "Couldn't define timeout transition because timedOutState not defined"});
                    }
                }
            }
        }
    };

    var TransitionPhase = function(listener, globals, scopes) {
        stop.StopListener.StopListener.call(this); // inherit default listener
        this.errors = [];
        this.listener = listener;
        this.globals = globals;
        this.scopes = scopes;
        this.currentScope = undefined;
        return this;
    };
    TransitionPhase.prototype = Object.create(stop.StopListener.StopListener.prototype);
    TransitionPhase.prototype.constructor = TransitionPhase;
    TransitionPhase.prototype.enterFile = function(ctx) {
        this.currentScope = this.globals;
    };
    TransitionPhase.prototype.enterModel = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            this.currentScope = this.globals.definitions[ctx.MODEL_TYPE().getText()];
        }
    };
    TransitionPhase.prototype.exitModel = function(ctx) {
        this.currentScope = this.currentScope.enclosingScope;
    };
    TransitionPhase.prototype.exitTransition = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            var modelName = ctx.MODEL_TYPE().getText();
            var modelSymbol = this.currentScope;

            var symbol = this.globals.definitions[modelName];
            if(modelSymbol != undefined && symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    modelSymbol.transitions.push(modelName);
                }
            }else{
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                var line = 1;
                if (lineScope){
                    line = lineScope.line;
                }
                this.errors.push({line: line, message: "Couldn't define transition because " + modelName + " isn't defined"});
            }
        }
    };
    TransitionPhase.prototype.exitEnqueue = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            var modelName = ctx.MODEL_TYPE().getText();
            var modelSymbol = this.currentScope;

            var symbol = this.globals.definitions[modelName];
            if(modelSymbol != undefined && symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    modelSymbol.enqueues.push(modelName);
                }
            }else{
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                var line = 1;
                if (lineScope){
                    line = lineScope.line;
                }
                this.errors.push({line: line, message: "Couldn't define enqueue because " + modelName + " isn't defined"});
            }
        }
    };
    TransitionPhase.prototype.exitThrow_parameter = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            var modelName = ctx.MODEL_TYPE().getText();
            var modelSymbol = this.currentScope;

            var symbol = this.globals.definitions[modelName];
            if(modelSymbol != undefined && symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    modelSymbol.transitions.push(modelName);
                }
            }else{
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                var line = 1;
                if (lineScope){
                    line = lineScope.line;
                }
                this.errors.push({line: line, message: "Couldn't define transition because " + modelName + " isn't defined"});
            }
        }
    };

    var StopPhase = function(listener, globals, scopes) {
        stop.StopListener.StopListener.call(this); // inherit default listener
        this.errors = [];
        this.listener = listener;
        this.globals = globals;
        this.scopes = scopes;
        this.currentScope = undefined;
        return this;
    };
    StopPhase.prototype = Object.create(stop.StopListener.StopListener.prototype);
    StopPhase.prototype.constructor = StopPhase;
    StopPhase.prototype.enterFile = function(ctx) {
        this.currentScope = this.globals;
    };
    StopPhase.prototype.enterModel = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            this.currentScope = this.globals.definitions[ctx.MODEL_TYPE().getText()];
        }
    };
    StopPhase.prototype.exitModel = function(ctx) {
        this.currentScope = this.currentScope.enclosingScope;
    };
    StopPhase.prototype.findStop = function(modelSymbol) {
        if (modelSymbol.stop){
            return true;
        }

        if (modelSymbol.transitions.length == 0){
            return false;
        }

        var foundStop = true;

        for (var transitionIndex in modelSymbol.transitions){
            var transition = modelSymbol.transitions[transitionIndex];
            var symbol = this.globals.definitions[transition];
            if(symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    if (!this.findStop(symbol)){
                        foundStop = false;
                    }
                }else{
                    foundStop = false;
                }
            }else {
                foundStop = false;
            }
        }

        return foundStop;
    };
    StopPhase.prototype.exitTransition = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            var modelName = ctx.MODEL_TYPE().getText();

            var symbol = this.globals.definitions[modelName];
            if(symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    var modelSymbol = symbol;
                    var valid = this.findStop(modelSymbol);
                    if (!valid){
                        var lineScope = getEnclosingScopeWithLine(this.currentScope);
                        var line = 1;
                        if (lineScope){
                            line = lineScope.line;
                        }
                        this.errors.push({line: line, message: "Couldn't define transition \""+
                                modelName +"\" because a stopping state could not be reached"});
                    }
                }
            }else{
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                var line = 1;
                if (lineScope){
                    line = lineScope.line;
                }
                this.errors.push({line: line, message: "Couldn't define transition because " + modelName + " isn't defined"});
            }
        }
    };
    StopPhase.prototype.exitEnqueue = function(ctx) {
        if (ctx.MODEL_TYPE()!= null){
            var modelName = ctx.MODEL_TYPE().getText();

            var symbol = this.globals.definitions[modelName];
            if(symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    var modelSymbol = symbol;
                    var valid = this.findStop(modelSymbol);
                    if (!valid){
                        var lineScope = getEnclosingScopeWithLine(this.currentScope);
                        var line = 1;
                        if (lineScope){
                            line = lineScope.line;
                        }
                        this.errors.push({line: line, message: "Couldn't define enqueue \""+
                                modelName +"\" because a stopping state could not be reached"});
                    }
                }
            }else{
                var lineScope = getEnclosingScopeWithLine(this.currentScope);
                var line = 1;
                if (lineScope){
                    line = lineScope.line;
                }
                this.errors.push({line: line, message: "Couldn't define enqueue because " + modelName + " isn't defined"});
            }
        }
    };

    var validate = function(input) {
        var stream = antlr4.CharStreams.fromString(input);
        var lexer = new stop.StopLexer.StopLexer(stream);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new stop.StopParser.StopParser(tokens);
        var annotations = [];
        var listener = new AnnotatingErrorListener(annotations)
        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        var tree = parser.file();

        var handleErrors = function(listener, errors){
            for (var errorIndex in errors){
                var error = errors[errorIndex];
                listener.annotations.push({
                    row: error.line - 1,
                    column: 0,
                    text: error.message,
                    type: "error"
                });
            }
        }

        var graph = undefined;

        try {
            var defPhase = new DefPhase(listener);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(defPhase, tree);
            handleErrors(listener, defPhase.errors);

            var refPhase = new RefPhase(listener, defPhase.globals, defPhase.scopes);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(refPhase, tree);
            handleErrors(listener, refPhase.errors);

            var transitionPhase = new TransitionPhase(listener, defPhase.globals, defPhase.scopes);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(transitionPhase, tree);
            handleErrors(listener, transitionPhase.errors);

            var stopPhase = new StopPhase(listener, defPhase.globals, defPhase.scopes);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(stopPhase, tree);
            handleErrors(listener, stopPhase.errors);

            var digraph = "digraph {\nnode [shape=circle]\n";
            for (var key in defPhase.globals.definitions){
                var modelSymbol = defPhase.globals.definitions[key];
                if (modelSymbol && (modelSymbol instanceof ModelSymbol)){
                    var atts = [];
                    if (modelSymbol.async) {
                        atts.push("style=dashed");
                    }
                    if (modelSymbol.queue) {
                        atts.push("shape=cylinder");
                    }
                    if (modelSymbol.start){
                        atts.push("style=bold");
                    } else if (modelSymbol.stop){
                        atts.push("shape=doublecircle");
                    }
                    digraph += modelSymbol.name + " ["+atts.join(", ")+"]\n";
                    for (var i = 0; i < modelSymbol.transitions.length; i++){
                        var transition = modelSymbol.transitions[i];
                        digraph += modelSymbol.name + " -> " + transition + "\n";
                    }
                    for (var i = 0; i < modelSymbol.enqueues.length; i++){
                        var enqueue = modelSymbol.enqueues[i];
                        digraph += modelSymbol.name + " -> " + enqueue + " [style=dashed]\n";
                    }
                }
            }
            digraph += "}\n";
            graph = digraph;
        } catch (err) {
            if (err.line){
                listener.annotations.push({
                    row: err.line - 1,
                    column: 0,
                    text: err.message,
                    type: "error"
                });
            }
        }

        return {annotations: annotations, graph: graph};
    };

    (function() {

        this.onCreate = function(){
            var value = this.doc.getValue();
            var validateObj = validate(value);
            this.sender.emit("annotate", validateObj.annotations);
            this.sender.emit("graph", validateObj.graph);
        };
        
        this.onUpdate = function() {
            var value = this.doc.getValue();
            var validateObj = validate(value);
            this.sender.emit("annotate", validateObj.annotations);
            this.sender.emit("graph", validateObj.graph);
        };

    }).call(StopWorker.prototype);

    exports.StopWorker = StopWorker;
});
