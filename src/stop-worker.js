var EDITOR_BASE="http://localhost:8000";
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

    var validate = function(input) {
        var stream = antlr4.CharStreams.fromString(input);
        var lexer = new stop.StopLexer.StopLexer(stream);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new stop.StopParser.StopParser(tokens);
        var annotations = [];
        var listener = new AnnotatingErrorListener(annotations)
        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        parser.file();
        return annotations;
    };

    (function() {

        this.onUpdate = function() {
            var value = this.doc.getValue();
            var annotations = validate(value);
            this.sender.emit("annotate", annotations);
        };

    }).call(StopWorker.prototype);

    exports.StopWorker = StopWorker;
});
