// Generated from Stop.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by StopParser.
function StopListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

StopListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
StopListener.prototype.constructor = StopListener;

// Enter a parse tree produced by StopParser#file.
StopListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by StopParser#file.
StopListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by StopParser#include.
StopListener.prototype.enterInclude = function(ctx) {
};

// Exit a parse tree produced by StopParser#include.
StopListener.prototype.exitInclude = function(ctx) {
};


// Enter a parse tree produced by StopParser#model.
StopListener.prototype.enterModel = function(ctx) {
};

// Exit a parse tree produced by StopParser#model.
StopListener.prototype.exitModel = function(ctx) {
};


// Enter a parse tree produced by StopParser#block.
StopListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by StopParser#block.
StopListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by StopParser#statement.
StopListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by StopParser#statement.
StopListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by StopParser#block_with_timeout.
StopListener.prototype.enterBlock_with_timeout = function(ctx) {
};

// Exit a parse tree produced by StopParser#block_with_timeout.
StopListener.prototype.exitBlock_with_timeout = function(ctx) {
};


// Enter a parse tree produced by StopParser#block_with_timeout_statement.
StopListener.prototype.enterBlock_with_timeout_statement = function(ctx) {
};

// Exit a parse tree produced by StopParser#block_with_timeout_statement.
StopListener.prototype.exitBlock_with_timeout_statement = function(ctx) {
};


// Enter a parse tree produced by StopParser#return_block.
StopListener.prototype.enterReturn_block = function(ctx) {
};

// Exit a parse tree produced by StopParser#return_block.
StopListener.prototype.exitReturn_block = function(ctx) {
};


// Enter a parse tree produced by StopParser#return_block_statement.
StopListener.prototype.enterReturn_block_statement = function(ctx) {
};

// Exit a parse tree produced by StopParser#return_block_statement.
StopListener.prototype.exitReturn_block_statement = function(ctx) {
};


// Enter a parse tree produced by StopParser#return_block_with_timeout.
StopListener.prototype.enterReturn_block_with_timeout = function(ctx) {
};

// Exit a parse tree produced by StopParser#return_block_with_timeout.
StopListener.prototype.exitReturn_block_with_timeout = function(ctx) {
};


// Enter a parse tree produced by StopParser#return_block_with_timeout_statement.
StopListener.prototype.enterReturn_block_with_timeout_statement = function(ctx) {
};

// Exit a parse tree produced by StopParser#return_block_with_timeout_statement.
StopListener.prototype.exitReturn_block_with_timeout_statement = function(ctx) {
};


// Enter a parse tree produced by StopParser#scalar_type.
StopListener.prototype.enterScalar_type = function(ctx) {
};

// Exit a parse tree produced by StopParser#scalar_type.
StopListener.prototype.exitScalar_type = function(ctx) {
};


// Enter a parse tree produced by StopParser#model_type.
StopListener.prototype.enterModel_type = function(ctx) {
};

// Exit a parse tree produced by StopParser#model_type.
StopListener.prototype.exitModel_type = function(ctx) {
};


// Enter a parse tree produced by StopParser#enum_type.
StopListener.prototype.enterEnum_type = function(ctx) {
};

// Exit a parse tree produced by StopParser#enum_type.
StopListener.prototype.exitEnum_type = function(ctx) {
};


// Enter a parse tree produced by StopParser#enum_value.
StopListener.prototype.enterEnum_value = function(ctx) {
};

// Exit a parse tree produced by StopParser#enum_value.
StopListener.prototype.exitEnum_value = function(ctx) {
};


// Enter a parse tree produced by StopParser#enumeration.
StopListener.prototype.enterEnumeration = function(ctx) {
};

// Exit a parse tree produced by StopParser#enumeration.
StopListener.prototype.exitEnumeration = function(ctx) {
};


// Enter a parse tree produced by StopParser#field.
StopListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by StopParser#field.
StopListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by StopParser#async_source.
StopListener.prototype.enterAsync_source = function(ctx) {
};

// Exit a parse tree produced by StopParser#async_source.
StopListener.prototype.exitAsync_source = function(ctx) {
};


// Enter a parse tree produced by StopParser#async_source_mapping.
StopListener.prototype.enterAsync_source_mapping = function(ctx) {
};

// Exit a parse tree produced by StopParser#async_source_mapping.
StopListener.prototype.exitAsync_source_mapping = function(ctx) {
};


// Enter a parse tree produced by StopParser#async_source_mapping_parameter.
StopListener.prototype.enterAsync_source_mapping_parameter = function(ctx) {
};

// Exit a parse tree produced by StopParser#async_source_mapping_parameter.
StopListener.prototype.exitAsync_source_mapping_parameter = function(ctx) {
};


// Enter a parse tree produced by StopParser#async_source_mapping_parameter_rename.
StopListener.prototype.enterAsync_source_mapping_parameter_rename = function(ctx) {
};

// Exit a parse tree produced by StopParser#async_source_mapping_parameter_rename.
StopListener.prototype.exitAsync_source_mapping_parameter_rename = function(ctx) {
};


// Enter a parse tree produced by StopParser#type.
StopListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by StopParser#type.
StopListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by StopParser#collection.
StopListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by StopParser#collection.
StopListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by StopParser#return_type.
StopListener.prototype.enterReturn_type = function(ctx) {
};

// Exit a parse tree produced by StopParser#return_type.
StopListener.prototype.exitReturn_type = function(ctx) {
};


// Enter a parse tree produced by StopParser#throw_type.
StopListener.prototype.enterThrow_type = function(ctx) {
};

// Exit a parse tree produced by StopParser#throw_type.
StopListener.prototype.exitThrow_type = function(ctx) {
};


// Enter a parse tree produced by StopParser#throw_parameter.
StopListener.prototype.enterThrow_parameter = function(ctx) {
};

// Exit a parse tree produced by StopParser#throw_parameter.
StopListener.prototype.exitThrow_parameter = function(ctx) {
};


// Enter a parse tree produced by StopParser#timeout.
StopListener.prototype.enterTimeout = function(ctx) {
};

// Exit a parse tree produced by StopParser#timeout.
StopListener.prototype.exitTimeout = function(ctx) {
};


// Enter a parse tree produced by StopParser#transition.
StopListener.prototype.enterTransition = function(ctx) {
};

// Exit a parse tree produced by StopParser#transition.
StopListener.prototype.exitTransition = function(ctx) {
};


// Enter a parse tree produced by StopParser#enqueue.
StopListener.prototype.enterEnqueue = function(ctx) {
};

// Exit a parse tree produced by StopParser#enqueue.
StopListener.prototype.exitEnqueue = function(ctx) {
};



exports.StopListener = StopListener;