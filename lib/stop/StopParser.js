// Generated from Stop.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StopListener = require('./StopListener').StopListener;
var grammarFileName = "Stop.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003(\u00ec\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0003\u0002\u0003",
    "\u0002\u0006\u00027\n\u0002\r\u0002\u000e\u00028\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004A\n\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004E\n\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004I\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004M\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004S\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004[\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004c\n\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004g\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005l\n\u0005",
    "\u0007\u0005n\n\u0005\f\u0005\u000e\u0005q\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006x\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007}\n\u0007\u0007\u0007\u007f",
    "\n\u0007\f\u0007\u000e\u0007\u0082\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u008a\n\b\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u008f\n\t\u0007\t\u0091\n\t\f\t\u000e\t\u0094\u000b\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0005\n\u009a\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u009f\n\u000b\u0007\u000b\u00a1\n\u000b\f\u000b",
    "\u000e\u000b\u00a4\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0005\f\u00ab\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0006\u0011\u00b9\n\u0011\r\u0011\u000e\u0011",
    "\u00ba\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00c2\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00c7\n\u0012\u0005\u0012\u00c9\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u00d0\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00d8\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007",
    "\u0017\u00de\n\u0017\f\u0017\u000e\u0017\u00e1\u000b\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0002\u0002\u001b\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02\u0002\u0003\u0003\u0002\b\u0016\u0002\u00f6\u00026\u0003\u0002",
    "\u0002\u0002\u0004:\u0003\u0002\u0002\u0002\u0006f\u0003\u0002\u0002",
    "\u0002\bh\u0003\u0002\u0002\u0002\nw\u0003\u0002\u0002\u0002\fy\u0003",
    "\u0002\u0002\u0002\u000e\u0089\u0003\u0002\u0002\u0002\u0010\u008b\u0003",
    "\u0002\u0002\u0002\u0012\u0099\u0003\u0002\u0002\u0002\u0014\u009b\u0003",
    "\u0002\u0002\u0002\u0016\u00aa\u0003\u0002\u0002\u0002\u0018\u00ac\u0003",
    "\u0002\u0002\u0002\u001a\u00ae\u0003\u0002\u0002\u0002\u001c\u00b0\u0003",
    "\u0002\u0002\u0002\u001e\u00b2\u0003\u0002\u0002\u0002 \u00b4\u0003",
    "\u0002\u0002\u0002\"\u00c8\u0003\u0002\u0002\u0002$\u00ca\u0003\u0002",
    "\u0002\u0002&\u00cf\u0003\u0002\u0002\u0002(\u00d1\u0003\u0002\u0002",
    "\u0002*\u00d7\u0003\u0002\u0002\u0002,\u00d9\u0003\u0002\u0002\u0002",
    ".\u00e2\u0003\u0002\u0002\u00020\u00e4\u0003\u0002\u0002\u00022\u00e8",
    "\u0003\u0002\u0002\u000247\u0005\u0004\u0003\u000257\u0005\u0006\u0004",
    "\u000264\u0003\u0002\u0002\u000265\u0003\u0002\u0002\u000278\u0003\u0002",
    "\u0002\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u0003",
    "\u0003\u0002\u0002\u0002:;\u0007\u0003\u0002\u0002;<\u0007\u0004\u0002",
    "\u0002<=\u0007%\u0002\u0002=>\u0007\u0004\u0002\u0002>\u0005\u0003\u0002",
    "\u0002\u0002?A\u0007\u001e\u0002\u0002@?\u0003\u0002\u0002\u0002@A\u0003",
    "\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BD\u0007#\u0002\u0002CE",
    "\u0005,\u0017\u0002DC\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002",
    "EF\u0003\u0002\u0002\u0002Fg\u0005\b\u0005\u0002GI\u0007\u001f\u0002",
    "\u0002HG\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002",
    "\u0002\u0002JL\u0007#\u0002\u0002KM\u0005,\u0017\u0002LK\u0003\u0002",
    "\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002Ng\u0005",
    "\b\u0005\u0002OP\u0007\u001d\u0002\u0002PR\u0007#\u0002\u0002QS\u0005",
    ",\u0017\u0002RQ\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002ST",
    "\u0003\u0002\u0002\u0002Tg\u0005\f\u0007\u0002UV\u0007\u001d\u0002\u0002",
    "VW\u0007#\u0002\u0002WX\u0007!\u0002\u0002XZ\u0005*\u0016\u0002Y[\u0005",
    ",\u0017\u0002ZY\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\",
    "\u0003\u0002\u0002\u0002\\]\u0005\u0014\u000b\u0002]g\u0003\u0002\u0002",
    "\u0002^_\u0007#\u0002\u0002_`\u0007!\u0002\u0002`b\u0005*\u0016\u0002",
    "ac\u0005,\u0017\u0002ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002cd\u0003\u0002\u0002\u0002de\u0005\u0010\t\u0002eg\u0003\u0002",
    "\u0002\u0002f@\u0003\u0002\u0002\u0002fH\u0003\u0002\u0002\u0002fO\u0003",
    "\u0002\u0002\u0002fU\u0003\u0002\u0002\u0002f^\u0003\u0002\u0002\u0002",
    "g\u0007\u0003\u0002\u0002\u0002ho\u0007\u0005\u0002\u0002ik\u0005\n",
    "\u0006\u0002jl\u0007\u0006\u0002\u0002kj\u0003\u0002\u0002\u0002kl\u0003",
    "\u0002\u0002\u0002ln\u0003\u0002\u0002\u0002mi\u0003\u0002\u0002\u0002",
    "nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002",
    "\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0007\u0007",
    "\u0002\u0002s\t\u0003\u0002\u0002\u0002tx\u0005 \u0011\u0002ux\u0005",
    "\"\u0012\u0002vx\u00052\u001a\u0002wt\u0003\u0002\u0002\u0002wu\u0003",
    "\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x\u000b\u0003\u0002\u0002",
    "\u0002y\u0080\u0007\u0005\u0002\u0002z|\u0005\u000e\b\u0002{}\u0007",
    "\u0006\u0002\u0002|{\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}\u007f\u0003\u0002\u0002\u0002~z\u0003\u0002\u0002\u0002\u007f\u0082",
    "\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0003\u0002\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u0080",
    "\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0007\u0002\u0002\u0084\r",
    "\u0003\u0002\u0002\u0002\u0085\u008a\u0005 \u0011\u0002\u0086\u008a",
    "\u0005\"\u0012\u0002\u0087\u008a\u00052\u001a\u0002\u0088\u008a\u0005",
    "0\u0019\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u0089\u0086\u0003",
    "\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u000f\u0003\u0002\u0002\u0002\u008b\u0092\u0007",
    "\u0005\u0002\u0002\u008c\u008e\u0005\u0012\n\u0002\u008d\u008f\u0007",
    "\u0006\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008e\u008f\u0003",
    "\u0002\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008c\u0003",
    "\u0002\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003",
    "\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003",
    "\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0095\u0096\u0007",
    "\u0007\u0002\u0002\u0096\u0011\u0003\u0002\u0002\u0002\u0097\u009a\u0005",
    " \u0011\u0002\u0098\u009a\u0005\"\u0012\u0002\u0099\u0097\u0003\u0002",
    "\u0002\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u009a\u0013\u0003\u0002",
    "\u0002\u0002\u009b\u00a2\u0007\u0005\u0002\u0002\u009c\u009e\u0005\u0016",
    "\f\u0002\u009d\u009f\u0007\u0006\u0002\u0002\u009e\u009d\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002",
    "\u0002\u0002\u00a0\u009c\u0003\u0002\u0002\u0002\u00a1\u00a4\u0003\u0002",
    "\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002",
    "\u0002\u0002\u00a3\u00a5\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002",
    "\u0002\u0002\u00a5\u00a6\u0007\u0007\u0002\u0002\u00a6\u0015\u0003\u0002",
    "\u0002\u0002\u00a7\u00ab\u0005 \u0011\u0002\u00a8\u00ab\u0005\"\u0012",
    "\u0002\u00a9\u00ab\u00050\u0019\u0002\u00aa\u00a7\u0003\u0002\u0002",
    "\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00a9\u0003\u0002\u0002",
    "\u0002\u00ab\u0017\u0003\u0002\u0002\u0002\u00ac\u00ad\t\u0002\u0002",
    "\u0002\u00ad\u0019\u0003\u0002\u0002\u0002\u00ae\u00af\u0007#\u0002",
    "\u0002\u00af\u001b\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007#\u0002",
    "\u0002\u00b1\u001d\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007#\u0002",
    "\u0002\u00b3\u001f\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u0017\u0002",
    "\u0002\u00b5\u00b6\u0005\u001c\u000f\u0002\u00b6\u00b8\u0007\u0005\u0002",
    "\u0002\u00b7\u00b9\u0005\u001e\u0010\u0002\u00b8\u00b7\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0007\u0007\u0002\u0002\u00bd!\u0003\u0002\u0002",
    "\u0002\u00be\u00bf\u0005&\u0014\u0002\u00bf\u00c1\u0007$\u0002\u0002",
    "\u00c0\u00c2\u0005$\u0013\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002",
    "\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c9\u0003\u0002\u0002\u0002",
    "\u00c3\u00c4\u0005(\u0015\u0002\u00c4\u00c6\u0007$\u0002\u0002\u00c5",
    "\u00c7\u0005$\u0013\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c9\u0003\u0002\u0002\u0002\u00c8",
    "\u00be\u0003\u0002\u0002\u0002\u00c8\u00c3\u0003\u0002\u0002\u0002\u00c9",
    "#\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007!\u0002\u0002\u00cb\u00cc",
    "\u0007#\u0002\u0002\u00cc%\u0003\u0002\u0002\u0002\u00cd\u00d0\u0005",
    "\u0018\r\u0002\u00ce\u00d0\u0005\u001a\u000e\u0002\u00cf\u00cd\u0003",
    "\u0002\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00d0\'\u0003",
    "\u0002\u0002\u0002\u00d1\u00d2\u0007\u0018\u0002\u0002\u00d2\u00d3\u0005",
    "&\u0014\u0002\u00d3\u00d4\u0007\u0019\u0002\u0002\u00d4)\u0003\u0002",
    "\u0002\u0002\u00d5\u00d8\u0005(\u0015\u0002\u00d6\u00d8\u0005&\u0014",
    "\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002",
    "\u0002\u00d8+\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u001a\u0002",
    "\u0002\u00da\u00df\u0005.\u0018\u0002\u00db\u00dc\u0007\u001b\u0002",
    "\u0002\u00dc\u00de\u0005.\u0018\u0002\u00dd\u00db\u0003\u0002\u0002",
    "\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0-\u0003\u0002\u0002",
    "\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007#\u0002",
    "\u0002\u00e3/\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007\u001c\u0002",
    "\u0002\u00e5\u00e6\u0007\"\u0002\u0002\u00e6\u00e7\u00052\u001a\u0002",
    "\u00e71\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007 \u0002\u0002\u00e9",
    "\u00ea\u0007#\u0002\u0002\u00ea3\u0003\u0002\u0002\u0002\u001f68@DH",
    "LRZbfkow|\u0080\u0089\u008e\u0092\u0099\u009e\u00a2\u00aa\u00ba\u00c1",
    "\u00c6\u00c8\u00cf\u00d7\u00df"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'include'", "'\"'", "'{'", "';'", "'}'", "'double'", 
                     "'float'", "'int32'", "'int64'", "'uint32'", "'uint64'", 
                     "'sint32'", "'sint64'", "'fixed32'", "'fixed64'", "'sfixed32'", 
                     "'sfixed64'", "'bool'", "'string'", "'bytes'", "'enum'", 
                     "'['", "']'", "'throws'", "','", "'timeout'", "'async'", 
                     "'start'", "'stop'", "'->'", "'<-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "ASYNC", "START", "STOP", "TRANSITION_OP", "RETURN_OP", 
                      "NUMBER", "MODEL_TYPE", "ID", "FILENAME", "COMMENT", 
                      "LINE_COMMENT", "WS" ];

var ruleNames =  [ "file", "include", "model", "block", "statement", "block_with_timeout", 
                   "block_with_timeout_statement", "return_block", "return_block_statement", 
                   "return_block_with_timeout", "return_block_with_timeout_statement", 
                   "scalar_type", "model_type", "enum_type", "enum_value", 
                   "enumeration", "field", "async_source", "type", "collection", 
                   "return_type", "throw_type", "throw_parameter", "timeout", 
                   "transition" ];

function StopParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StopParser.prototype = Object.create(antlr4.Parser.prototype);
StopParser.prototype.constructor = StopParser;

Object.defineProperty(StopParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StopParser.EOF = antlr4.Token.EOF;
StopParser.T__0 = 1;
StopParser.T__1 = 2;
StopParser.T__2 = 3;
StopParser.T__3 = 4;
StopParser.T__4 = 5;
StopParser.T__5 = 6;
StopParser.T__6 = 7;
StopParser.T__7 = 8;
StopParser.T__8 = 9;
StopParser.T__9 = 10;
StopParser.T__10 = 11;
StopParser.T__11 = 12;
StopParser.T__12 = 13;
StopParser.T__13 = 14;
StopParser.T__14 = 15;
StopParser.T__15 = 16;
StopParser.T__16 = 17;
StopParser.T__17 = 18;
StopParser.T__18 = 19;
StopParser.T__19 = 20;
StopParser.T__20 = 21;
StopParser.T__21 = 22;
StopParser.T__22 = 23;
StopParser.T__23 = 24;
StopParser.T__24 = 25;
StopParser.T__25 = 26;
StopParser.ASYNC = 27;
StopParser.START = 28;
StopParser.STOP = 29;
StopParser.TRANSITION_OP = 30;
StopParser.RETURN_OP = 31;
StopParser.NUMBER = 32;
StopParser.MODEL_TYPE = 33;
StopParser.ID = 34;
StopParser.FILENAME = 35;
StopParser.COMMENT = 36;
StopParser.LINE_COMMENT = 37;
StopParser.WS = 38;

StopParser.RULE_file = 0;
StopParser.RULE_include = 1;
StopParser.RULE_model = 2;
StopParser.RULE_block = 3;
StopParser.RULE_statement = 4;
StopParser.RULE_block_with_timeout = 5;
StopParser.RULE_block_with_timeout_statement = 6;
StopParser.RULE_return_block = 7;
StopParser.RULE_return_block_statement = 8;
StopParser.RULE_return_block_with_timeout = 9;
StopParser.RULE_return_block_with_timeout_statement = 10;
StopParser.RULE_scalar_type = 11;
StopParser.RULE_model_type = 12;
StopParser.RULE_enum_type = 13;
StopParser.RULE_enum_value = 14;
StopParser.RULE_enumeration = 15;
StopParser.RULE_field = 16;
StopParser.RULE_async_source = 17;
StopParser.RULE_type = 18;
StopParser.RULE_collection = 19;
StopParser.RULE_return_type = 20;
StopParser.RULE_throw_type = 21;
StopParser.RULE_throw_parameter = 22;
StopParser.RULE_timeout = 23;
StopParser.RULE_transition = 24;

function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.include = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeContext);
    } else {
        return this.getTypedRuleContext(IncludeContext,i);
    }
};

FileContext.prototype.model = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModelContext);
    } else {
        return this.getTypedRuleContext(ModelContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitFile(this);
	}
};




StopParser.FileContext = FileContext;

StopParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StopParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 52;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case StopParser.T__0:
                this.state = 50;
                this.include();
                break;
            case StopParser.ASYNC:
            case StopParser.START:
            case StopParser.STOP:
            case StopParser.MODEL_TYPE:
                this.state = 51;
                this.model();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 54; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__0) | (1 << StopParser.ASYNC) | (1 << StopParser.START) | (1 << StopParser.STOP))) !== 0) || _la===StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_include;
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.FILENAME = function() {
    return this.getToken(StopParser.FILENAME, 0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitInclude(this);
	}
};




StopParser.IncludeContext = IncludeContext;

StopParser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StopParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(StopParser.T__0);
        this.state = 57;
        this.match(StopParser.T__1);
        this.state = 58;
        this.match(StopParser.FILENAME);
        this.state = 59;
        this.match(StopParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_model;
    return this;
}

ModelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelContext.prototype.constructor = ModelContext;

ModelContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

ModelContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ModelContext.prototype.START = function() {
    return this.getToken(StopParser.START, 0);
};

ModelContext.prototype.throw_type = function() {
    return this.getTypedRuleContext(Throw_typeContext,0);
};

ModelContext.prototype.STOP = function() {
    return this.getToken(StopParser.STOP, 0);
};

ModelContext.prototype.ASYNC = function() {
    return this.getToken(StopParser.ASYNC, 0);
};

ModelContext.prototype.block_with_timeout = function() {
    return this.getTypedRuleContext(Block_with_timeoutContext,0);
};

ModelContext.prototype.RETURN_OP = function() {
    return this.getToken(StopParser.RETURN_OP, 0);
};

ModelContext.prototype.return_type = function() {
    return this.getTypedRuleContext(Return_typeContext,0);
};

ModelContext.prototype.return_block_with_timeout = function() {
    return this.getTypedRuleContext(Return_block_with_timeoutContext,0);
};

ModelContext.prototype.return_block = function() {
    return this.getTypedRuleContext(Return_blockContext,0);
};

ModelContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterModel(this);
	}
};

ModelContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitModel(this);
	}
};




StopParser.ModelContext = ModelContext;

StopParser.prototype.model = function() {

    var localctx = new ModelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StopParser.RULE_model);
    var _la = 0; // Token type
    try {
        this.state = 100;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.START) {
                this.state = 61;
                this.match(StopParser.START);
            }

            this.state = 64;
            this.match(StopParser.MODEL_TYPE);
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__23) {
                this.state = 65;
                this.throw_type();
            }

            this.state = 68;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.STOP) {
                this.state = 69;
                this.match(StopParser.STOP);
            }

            this.state = 72;
            this.match(StopParser.MODEL_TYPE);
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__23) {
                this.state = 73;
                this.throw_type();
            }

            this.state = 76;
            this.block();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 77;
            this.match(StopParser.ASYNC);
            this.state = 78;
            this.match(StopParser.MODEL_TYPE);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__23) {
                this.state = 79;
                this.throw_type();
            }

            this.state = 82;
            this.block_with_timeout();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 83;
            this.match(StopParser.ASYNC);
            this.state = 84;
            this.match(StopParser.MODEL_TYPE);
            this.state = 85;
            this.match(StopParser.RETURN_OP);
            this.state = 86;
            this.return_type();
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__23) {
                this.state = 87;
                this.throw_type();
            }

            this.state = 90;
            this.return_block_with_timeout();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 92;
            this.match(StopParser.MODEL_TYPE);
            this.state = 93;
            this.match(StopParser.RETURN_OP);
            this.state = 94;
            this.return_type();
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__23) {
                this.state = 95;
                this.throw_type();
            }

            this.state = 98;
            this.return_block();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitBlock(this);
	}
};




StopParser.BlockContext = BlockContext;

StopParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StopParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(StopParser.T__2);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (StopParser.T__5 - 6)) | (1 << (StopParser.T__6 - 6)) | (1 << (StopParser.T__7 - 6)) | (1 << (StopParser.T__8 - 6)) | (1 << (StopParser.T__9 - 6)) | (1 << (StopParser.T__10 - 6)) | (1 << (StopParser.T__11 - 6)) | (1 << (StopParser.T__12 - 6)) | (1 << (StopParser.T__13 - 6)) | (1 << (StopParser.T__14 - 6)) | (1 << (StopParser.T__15 - 6)) | (1 << (StopParser.T__16 - 6)) | (1 << (StopParser.T__17 - 6)) | (1 << (StopParser.T__18 - 6)) | (1 << (StopParser.T__19 - 6)) | (1 << (StopParser.T__20 - 6)) | (1 << (StopParser.T__21 - 6)) | (1 << (StopParser.TRANSITION_OP - 6)) | (1 << (StopParser.MODEL_TYPE - 6)))) !== 0)) {
            this.state = 103;
            this.statement();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 104;
                this.match(StopParser.T__3);
            }

            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 112;
        this.match(StopParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.enumeration = function() {
    return this.getTypedRuleContext(EnumerationContext,0);
};

StatementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

StatementContext.prototype.transition = function() {
    return this.getTypedRuleContext(TransitionContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitStatement(this);
	}
};




StopParser.StatementContext = StatementContext;

StopParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StopParser.RULE_statement);
    try {
        this.state = 117;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.enumeration();
            break;
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
        case StopParser.T__21:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 115;
            this.field();
            break;
        case StopParser.TRANSITION_OP:
            this.enterOuterAlt(localctx, 3);
            this.state = 116;
            this.transition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Block_with_timeoutContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_block_with_timeout;
    return this;
}

Block_with_timeoutContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_with_timeoutContext.prototype.constructor = Block_with_timeoutContext;

Block_with_timeoutContext.prototype.block_with_timeout_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Block_with_timeout_statementContext);
    } else {
        return this.getTypedRuleContext(Block_with_timeout_statementContext,i);
    }
};

Block_with_timeoutContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterBlock_with_timeout(this);
	}
};

Block_with_timeoutContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitBlock_with_timeout(this);
	}
};




StopParser.Block_with_timeoutContext = Block_with_timeoutContext;

StopParser.prototype.block_with_timeout = function() {

    var localctx = new Block_with_timeoutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StopParser.RULE_block_with_timeout);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(StopParser.T__2);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (StopParser.T__5 - 6)) | (1 << (StopParser.T__6 - 6)) | (1 << (StopParser.T__7 - 6)) | (1 << (StopParser.T__8 - 6)) | (1 << (StopParser.T__9 - 6)) | (1 << (StopParser.T__10 - 6)) | (1 << (StopParser.T__11 - 6)) | (1 << (StopParser.T__12 - 6)) | (1 << (StopParser.T__13 - 6)) | (1 << (StopParser.T__14 - 6)) | (1 << (StopParser.T__15 - 6)) | (1 << (StopParser.T__16 - 6)) | (1 << (StopParser.T__17 - 6)) | (1 << (StopParser.T__18 - 6)) | (1 << (StopParser.T__19 - 6)) | (1 << (StopParser.T__20 - 6)) | (1 << (StopParser.T__21 - 6)) | (1 << (StopParser.T__25 - 6)) | (1 << (StopParser.TRANSITION_OP - 6)) | (1 << (StopParser.MODEL_TYPE - 6)))) !== 0)) {
            this.state = 120;
            this.block_with_timeout_statement();
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 121;
                this.match(StopParser.T__3);
            }

            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 129;
        this.match(StopParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Block_with_timeout_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_block_with_timeout_statement;
    return this;
}

Block_with_timeout_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Block_with_timeout_statementContext.prototype.constructor = Block_with_timeout_statementContext;

Block_with_timeout_statementContext.prototype.enumeration = function() {
    return this.getTypedRuleContext(EnumerationContext,0);
};

Block_with_timeout_statementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Block_with_timeout_statementContext.prototype.transition = function() {
    return this.getTypedRuleContext(TransitionContext,0);
};

Block_with_timeout_statementContext.prototype.timeout = function() {
    return this.getTypedRuleContext(TimeoutContext,0);
};

Block_with_timeout_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterBlock_with_timeout_statement(this);
	}
};

Block_with_timeout_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitBlock_with_timeout_statement(this);
	}
};




StopParser.Block_with_timeout_statementContext = Block_with_timeout_statementContext;

StopParser.prototype.block_with_timeout_statement = function() {

    var localctx = new Block_with_timeout_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, StopParser.RULE_block_with_timeout_statement);
    try {
        this.state = 135;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.enumeration();
            break;
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
        case StopParser.T__21:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.field();
            break;
        case StopParser.TRANSITION_OP:
            this.enterOuterAlt(localctx, 3);
            this.state = 133;
            this.transition();
            break;
        case StopParser.T__25:
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            this.timeout();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_block;
    return this;
}

Return_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_blockContext.prototype.constructor = Return_blockContext;

Return_blockContext.prototype.return_block_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Return_block_statementContext);
    } else {
        return this.getTypedRuleContext(Return_block_statementContext,i);
    }
};

Return_blockContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_block(this);
	}
};

Return_blockContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_block(this);
	}
};




StopParser.Return_blockContext = Return_blockContext;

StopParser.prototype.return_block = function() {

    var localctx = new Return_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StopParser.RULE_return_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(StopParser.T__2);
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (StopParser.T__5 - 6)) | (1 << (StopParser.T__6 - 6)) | (1 << (StopParser.T__7 - 6)) | (1 << (StopParser.T__8 - 6)) | (1 << (StopParser.T__9 - 6)) | (1 << (StopParser.T__10 - 6)) | (1 << (StopParser.T__11 - 6)) | (1 << (StopParser.T__12 - 6)) | (1 << (StopParser.T__13 - 6)) | (1 << (StopParser.T__14 - 6)) | (1 << (StopParser.T__15 - 6)) | (1 << (StopParser.T__16 - 6)) | (1 << (StopParser.T__17 - 6)) | (1 << (StopParser.T__18 - 6)) | (1 << (StopParser.T__19 - 6)) | (1 << (StopParser.T__20 - 6)) | (1 << (StopParser.T__21 - 6)) | (1 << (StopParser.MODEL_TYPE - 6)))) !== 0)) {
            this.state = 138;
            this.return_block_statement();
            this.state = 140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 139;
                this.match(StopParser.T__3);
            }

            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 147;
        this.match(StopParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_block_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_block_statement;
    return this;
}

Return_block_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_block_statementContext.prototype.constructor = Return_block_statementContext;

Return_block_statementContext.prototype.enumeration = function() {
    return this.getTypedRuleContext(EnumerationContext,0);
};

Return_block_statementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Return_block_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_block_statement(this);
	}
};

Return_block_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_block_statement(this);
	}
};




StopParser.Return_block_statementContext = Return_block_statementContext;

StopParser.prototype.return_block_statement = function() {

    var localctx = new Return_block_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StopParser.RULE_return_block_statement);
    try {
        this.state = 151;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.enumeration();
            break;
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
        case StopParser.T__21:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.field();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_block_with_timeoutContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_block_with_timeout;
    return this;
}

Return_block_with_timeoutContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_block_with_timeoutContext.prototype.constructor = Return_block_with_timeoutContext;

Return_block_with_timeoutContext.prototype.return_block_with_timeout_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Return_block_with_timeout_statementContext);
    } else {
        return this.getTypedRuleContext(Return_block_with_timeout_statementContext,i);
    }
};

Return_block_with_timeoutContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_block_with_timeout(this);
	}
};

Return_block_with_timeoutContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_block_with_timeout(this);
	}
};




StopParser.Return_block_with_timeoutContext = Return_block_with_timeoutContext;

StopParser.prototype.return_block_with_timeout = function() {

    var localctx = new Return_block_with_timeoutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StopParser.RULE_return_block_with_timeout);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(StopParser.T__2);
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (StopParser.T__5 - 6)) | (1 << (StopParser.T__6 - 6)) | (1 << (StopParser.T__7 - 6)) | (1 << (StopParser.T__8 - 6)) | (1 << (StopParser.T__9 - 6)) | (1 << (StopParser.T__10 - 6)) | (1 << (StopParser.T__11 - 6)) | (1 << (StopParser.T__12 - 6)) | (1 << (StopParser.T__13 - 6)) | (1 << (StopParser.T__14 - 6)) | (1 << (StopParser.T__15 - 6)) | (1 << (StopParser.T__16 - 6)) | (1 << (StopParser.T__17 - 6)) | (1 << (StopParser.T__18 - 6)) | (1 << (StopParser.T__19 - 6)) | (1 << (StopParser.T__20 - 6)) | (1 << (StopParser.T__21 - 6)) | (1 << (StopParser.T__25 - 6)) | (1 << (StopParser.MODEL_TYPE - 6)))) !== 0)) {
            this.state = 154;
            this.return_block_with_timeout_statement();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 155;
                this.match(StopParser.T__3);
            }

            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 163;
        this.match(StopParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_block_with_timeout_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_block_with_timeout_statement;
    return this;
}

Return_block_with_timeout_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_block_with_timeout_statementContext.prototype.constructor = Return_block_with_timeout_statementContext;

Return_block_with_timeout_statementContext.prototype.enumeration = function() {
    return this.getTypedRuleContext(EnumerationContext,0);
};

Return_block_with_timeout_statementContext.prototype.field = function() {
    return this.getTypedRuleContext(FieldContext,0);
};

Return_block_with_timeout_statementContext.prototype.timeout = function() {
    return this.getTypedRuleContext(TimeoutContext,0);
};

Return_block_with_timeout_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_block_with_timeout_statement(this);
	}
};

Return_block_with_timeout_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_block_with_timeout_statement(this);
	}
};




StopParser.Return_block_with_timeout_statementContext = Return_block_with_timeout_statementContext;

StopParser.prototype.return_block_with_timeout_statement = function() {

    var localctx = new Return_block_with_timeout_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, StopParser.RULE_return_block_with_timeout_statement);
    try {
        this.state = 168;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 165;
            this.enumeration();
            break;
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
        case StopParser.T__21:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 166;
            this.field();
            break;
        case StopParser.T__25:
            this.enterOuterAlt(localctx, 3);
            this.state = 167;
            this.timeout();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scalar_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_scalar_type;
    return this;
}

Scalar_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scalar_typeContext.prototype.constructor = Scalar_typeContext;


Scalar_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterScalar_type(this);
	}
};

Scalar_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitScalar_type(this);
	}
};




StopParser.Scalar_typeContext = Scalar_typeContext;

StopParser.prototype.scalar_type = function() {

    var localctx = new Scalar_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, StopParser.RULE_scalar_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Model_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_model_type;
    return this;
}

Model_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Model_typeContext.prototype.constructor = Model_typeContext;

Model_typeContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Model_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterModel_type(this);
	}
};

Model_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitModel_type(this);
	}
};




StopParser.Model_typeContext = Model_typeContext;

StopParser.prototype.model_type = function() {

    var localctx = new Model_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, StopParser.RULE_model_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Enum_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enum_type;
    return this;
}

Enum_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Enum_typeContext.prototype.constructor = Enum_typeContext;

Enum_typeContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Enum_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnum_type(this);
	}
};

Enum_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnum_type(this);
	}
};




StopParser.Enum_typeContext = Enum_typeContext;

StopParser.prototype.enum_type = function() {

    var localctx = new Enum_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, StopParser.RULE_enum_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Enum_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enum_value;
    return this;
}

Enum_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Enum_valueContext.prototype.constructor = Enum_valueContext;

Enum_valueContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Enum_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnum_value(this);
	}
};

Enum_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnum_value(this);
	}
};




StopParser.Enum_valueContext = Enum_valueContext;

StopParser.prototype.enum_value = function() {

    var localctx = new Enum_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, StopParser.RULE_enum_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumerationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enumeration;
    return this;
}

EnumerationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumerationContext.prototype.constructor = EnumerationContext;

EnumerationContext.prototype.enum_type = function() {
    return this.getTypedRuleContext(Enum_typeContext,0);
};

EnumerationContext.prototype.enum_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Enum_valueContext);
    } else {
        return this.getTypedRuleContext(Enum_valueContext,i);
    }
};

EnumerationContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnumeration(this);
	}
};

EnumerationContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnumeration(this);
	}
};




StopParser.EnumerationContext = EnumerationContext;

StopParser.prototype.enumeration = function() {

    var localctx = new EnumerationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, StopParser.RULE_enumeration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(StopParser.T__20);
        this.state = 179;
        this.enum_type();
        this.state = 180;
        this.match(StopParser.T__2);
        this.state = 182; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 181;
            this.enum_value();
            this.state = 184; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StopParser.MODEL_TYPE);
        this.state = 186;
        this.match(StopParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FieldContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

FieldContext.prototype.async_source = function() {
    return this.getTypedRuleContext(Async_sourceContext,0);
};

FieldContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitField(this);
	}
};




StopParser.FieldContext = FieldContext;

StopParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, StopParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.state = 198;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.type();
            this.state = 189;
            this.match(StopParser.ID);
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.RETURN_OP) {
                this.state = 190;
                this.async_source();
            }

            break;
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.collection();
            this.state = 194;
            this.match(StopParser.ID);
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.RETURN_OP) {
                this.state = 195;
                this.async_source();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Async_sourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_async_source;
    return this;
}

Async_sourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Async_sourceContext.prototype.constructor = Async_sourceContext;

Async_sourceContext.prototype.RETURN_OP = function() {
    return this.getToken(StopParser.RETURN_OP, 0);
};

Async_sourceContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Async_sourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterAsync_source(this);
	}
};

Async_sourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitAsync_source(this);
	}
};




StopParser.Async_sourceContext = Async_sourceContext;

StopParser.prototype.async_source = function() {

    var localctx = new Async_sourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, StopParser.RULE_async_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(StopParser.RETURN_OP);
        this.state = 201;
        this.match(StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.scalar_type = function() {
    return this.getTypedRuleContext(Scalar_typeContext,0);
};

TypeContext.prototype.model_type = function() {
    return this.getTypedRuleContext(Model_typeContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitType(this);
	}
};




StopParser.TypeContext = TypeContext;

StopParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, StopParser.RULE_type);
    try {
        this.state = 205;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.scalar_type();
            break;
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.model_type();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitCollection(this);
	}
};




StopParser.CollectionContext = CollectionContext;

StopParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, StopParser.RULE_collection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(StopParser.T__21);
        this.state = 208;
        this.type();
        this.state = 209;
        this.match(StopParser.T__22);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Return_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_return_type;
    return this;
}

Return_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_typeContext.prototype.constructor = Return_typeContext;

Return_typeContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

Return_typeContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

Return_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterReturn_type(this);
	}
};

Return_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitReturn_type(this);
	}
};




StopParser.Return_typeContext = Return_typeContext;

StopParser.prototype.return_type = function() {

    var localctx = new Return_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, StopParser.RULE_return_type);
    try {
        this.state = 213;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.collection();
            break;
        case StopParser.T__5:
        case StopParser.T__6:
        case StopParser.T__7:
        case StopParser.T__8:
        case StopParser.T__9:
        case StopParser.T__10:
        case StopParser.T__11:
        case StopParser.T__12:
        case StopParser.T__13:
        case StopParser.T__14:
        case StopParser.T__15:
        case StopParser.T__16:
        case StopParser.T__17:
        case StopParser.T__18:
        case StopParser.T__19:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
            this.type();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Throw_typeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_throw_type;
    return this;
}

Throw_typeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Throw_typeContext.prototype.constructor = Throw_typeContext;

Throw_typeContext.prototype.throw_parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Throw_parameterContext);
    } else {
        return this.getTypedRuleContext(Throw_parameterContext,i);
    }
};

Throw_typeContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterThrow_type(this);
	}
};

Throw_typeContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitThrow_type(this);
	}
};




StopParser.Throw_typeContext = Throw_typeContext;

StopParser.prototype.throw_type = function() {

    var localctx = new Throw_typeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, StopParser.RULE_throw_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(StopParser.T__23);
        this.state = 216;
        this.throw_parameter();
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StopParser.T__24) {
            this.state = 217;
            this.match(StopParser.T__24);
            this.state = 218;
            this.throw_parameter();
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Throw_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_throw_parameter;
    return this;
}

Throw_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Throw_parameterContext.prototype.constructor = Throw_parameterContext;

Throw_parameterContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

Throw_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterThrow_parameter(this);
	}
};

Throw_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitThrow_parameter(this);
	}
};




StopParser.Throw_parameterContext = Throw_parameterContext;

StopParser.prototype.throw_parameter = function() {

    var localctx = new Throw_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, StopParser.RULE_throw_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimeoutContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_timeout;
    return this;
}

TimeoutContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeoutContext.prototype.constructor = TimeoutContext;

TimeoutContext.prototype.NUMBER = function() {
    return this.getToken(StopParser.NUMBER, 0);
};

TimeoutContext.prototype.transition = function() {
    return this.getTypedRuleContext(TransitionContext,0);
};

TimeoutContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterTimeout(this);
	}
};

TimeoutContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitTimeout(this);
	}
};




StopParser.TimeoutContext = TimeoutContext;

StopParser.prototype.timeout = function() {

    var localctx = new TimeoutContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, StopParser.RULE_timeout);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.match(StopParser.T__25);
        this.state = 227;
        this.match(StopParser.NUMBER);
        this.state = 228;
        this.transition();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TransitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_transition;
    return this;
}

TransitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransitionContext.prototype.constructor = TransitionContext;

TransitionContext.prototype.TRANSITION_OP = function() {
    return this.getToken(StopParser.TRANSITION_OP, 0);
};

TransitionContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

TransitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterTransition(this);
	}
};

TransitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitTransition(this);
	}
};




StopParser.TransitionContext = TransitionContext;

StopParser.prototype.transition = function() {

    var localctx = new TransitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, StopParser.RULE_transition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(StopParser.TRANSITION_OP);
        this.state = 231;
        this.match(StopParser.MODEL_TYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.StopParser = StopParser;
