// Generated from Stop.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StopListener = require('./StopListener').StopListener;
var grammarFileName = "Stop.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003/\u011a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0006\u0002?\n\u0002\r\u0002\u000e\u0002@\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004",
    "I\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004M\n\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004Q\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004U\n\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004Y\n\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004]\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004c\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004k\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004s\n\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004w\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005|\n\u0005\u0007\u0005~\n\u0005\f\u0005\u000e",
    "\u0005\u0081\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006\u0089\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u008e\n\u0007\u0007\u0007\u0090\n\u0007",
    "\f\u0007\u000e\u0007\u0093\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u009c\n\b\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u00a1\n\t\u0007\t\u00a3\n\t\f\t\u000e\t\u00a6\u000b",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005\n\u00ac\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00b1\n\u000b\u0007\u000b\u00b3\n\u000b",
    "\f\u000b\u000e\u000b\u00b6\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00bd\n\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u00cb\n\u0011\r\u0011\u000e",
    "\u0011\u00cc\u0003\u0011\u0003\u0011\u0003\u0012\u0005\u0012\u00d2\n",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00d7\n\u0012",
    "\u0003\u0012\u0005\u0012\u00da\n\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u00df\n\u0012\u0005\u0012\u00e1\n\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00e6\n\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00ec\n\u0014\f\u0014\u000e",
    "\u0014\u00ef\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0005\u0017\u00fb\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0103\n\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u0109\n\u001a\f\u001a",
    "\u000e\u001a\u010c\u000b\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0002\u0002\u001f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:\u0002\u0003\u0003\u0002\b\u0017\u0002\u0129\u0002>\u0003",
    "\u0002\u0002\u0002\u0004B\u0003\u0002\u0002\u0002\u0006v\u0003\u0002",
    "\u0002\u0002\bx\u0003\u0002\u0002\u0002\n\u0088\u0003\u0002\u0002\u0002",
    "\f\u008a\u0003\u0002\u0002\u0002\u000e\u009b\u0003\u0002\u0002\u0002",
    "\u0010\u009d\u0003\u0002\u0002\u0002\u0012\u00ab\u0003\u0002\u0002\u0002",
    "\u0014\u00ad\u0003\u0002\u0002\u0002\u0016\u00bc\u0003\u0002\u0002\u0002",
    "\u0018\u00be\u0003\u0002\u0002\u0002\u001a\u00c0\u0003\u0002\u0002\u0002",
    "\u001c\u00c2\u0003\u0002\u0002\u0002\u001e\u00c4\u0003\u0002\u0002\u0002",
    " \u00c6\u0003\u0002\u0002\u0002\"\u00e0\u0003\u0002\u0002\u0002$\u00e2",
    "\u0003\u0002\u0002\u0002&\u00e7\u0003\u0002\u0002\u0002(\u00f2\u0003",
    "\u0002\u0002\u0002*\u00f6\u0003\u0002\u0002\u0002,\u00fa\u0003\u0002",
    "\u0002\u0002.\u00fc\u0003\u0002\u0002\u00020\u0102\u0003\u0002\u0002",
    "\u00022\u0104\u0003\u0002\u0002\u00024\u010d\u0003\u0002\u0002\u0002",
    "6\u010f\u0003\u0002\u0002\u00028\u0113\u0003\u0002\u0002\u0002:\u0116",
    "\u0003\u0002\u0002\u0002<?\u0005\u0004\u0003\u0002=?\u0005\u0006\u0004",
    "\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?@\u0003\u0002",
    "\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002A\u0003",
    "\u0003\u0002\u0002\u0002BC\u0007\u0003\u0002\u0002CD\u0007\u0004\u0002",
    "\u0002DE\u0007,\u0002\u0002EF\u0007\u0004\u0002\u0002F\u0005\u0003\u0002",
    "\u0002\u0002GI\u0007\"\u0002\u0002HG\u0003\u0002\u0002\u0002HI\u0003",
    "\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0007*\u0002\u0002KM",
    "\u00052\u001a\u0002LK\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002",
    "MN\u0003\u0002\u0002\u0002Nw\u0005\b\u0005\u0002OQ\u0007#\u0002\u0002",
    "PO\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002",
    "\u0002RT\u0007*\u0002\u0002SU\u00052\u001a\u0002TS\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002Vw\u0005\b",
    "\u0005\u0002WY\u0007$\u0002\u0002XW\u0003\u0002\u0002\u0002XY\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0007*\u0002\u0002[",
    "]\u00052\u001a\u0002\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002",
    "\u0002]^\u0003\u0002\u0002\u0002^w\u0005\b\u0005\u0002_`\u0007!\u0002",
    "\u0002`b\u0007*\u0002\u0002ac\u00052\u001a\u0002ba\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002dw\u0005\f",
    "\u0007\u0002ef\u0007!\u0002\u0002fg\u0007*\u0002\u0002gh\u0007&\u0002",
    "\u0002hj\u00050\u0019\u0002ik\u00052\u001a\u0002ji\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0005\u0014",
    "\u000b\u0002mw\u0003\u0002\u0002\u0002no\u0007*\u0002\u0002op\u0007",
    "&\u0002\u0002pr\u00050\u0019\u0002qs\u00052\u001a\u0002rq\u0003\u0002",
    "\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0005",
    "\u0010\t\u0002uw\u0003\u0002\u0002\u0002vH\u0003\u0002\u0002\u0002v",
    "P\u0003\u0002\u0002\u0002vX\u0003\u0002\u0002\u0002v_\u0003\u0002\u0002",
    "\u0002ve\u0003\u0002\u0002\u0002vn\u0003\u0002\u0002\u0002w\u0007\u0003",
    "\u0002\u0002\u0002x\u007f\u0007\u0005\u0002\u0002y{\u0005\n\u0006\u0002",
    "z|\u0007\u0006\u0002\u0002{z\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|~\u0003\u0002\u0002\u0002}y\u0003\u0002\u0002\u0002~\u0081\u0003",
    "\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0082\u0003\u0002\u0002\u0002\u0081\u007f\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0007\u0007\u0002\u0002\u0083\t\u0003",
    "\u0002\u0002\u0002\u0084\u0089\u0005 \u0011\u0002\u0085\u0089\u0005",
    "\"\u0012\u0002\u0086\u0089\u00058\u001d\u0002\u0087\u0089\u0005:\u001e",
    "\u0002\u0088\u0084\u0003\u0002\u0002\u0002\u0088\u0085\u0003\u0002\u0002",
    "\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0087\u0003\u0002\u0002",
    "\u0002\u0089\u000b\u0003\u0002\u0002\u0002\u008a\u0091\u0007\u0005\u0002",
    "\u0002\u008b\u008d\u0005\u000e\b\u0002\u008c\u008e\u0007\u0006\u0002",
    "\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002",
    "\u0002\u008e\u0090\u0003\u0002\u0002\u0002\u008f\u008b\u0003\u0002\u0002",
    "\u0002\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0094\u0003\u0002\u0002",
    "\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u0007\u0002",
    "\u0002\u0095\r\u0003\u0002\u0002\u0002\u0096\u009c\u0005 \u0011\u0002",
    "\u0097\u009c\u0005\"\u0012\u0002\u0098\u009c\u00058\u001d\u0002\u0099",
    "\u009c\u00056\u001c\u0002\u009a\u009c\u0005:\u001e\u0002\u009b\u0096",
    "\u0003\u0002\u0002\u0002\u009b\u0097\u0003\u0002\u0002\u0002\u009b\u0098",
    "\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009a",
    "\u0003\u0002\u0002\u0002\u009c\u000f\u0003\u0002\u0002\u0002\u009d\u00a4",
    "\u0007\u0005\u0002\u0002\u009e\u00a0\u0005\u0012\n\u0002\u009f\u00a1",
    "\u0007\u0006\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0003\u0002\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u009e",
    "\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2",
    "\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7",
    "\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0007\u0007\u0002\u0002\u00a8\u0011\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0005 \u0011\u0002\u00aa\u00ac\u0005\"\u0012\u0002\u00ab\u00a9\u0003",
    "\u0002\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u0013\u0003",
    "\u0002\u0002\u0002\u00ad\u00b4\u0007\u0005\u0002\u0002\u00ae\u00b0\u0005",
    "\u0016\f\u0002\u00af\u00b1\u0007\u0006\u0002\u0002\u00b0\u00af\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003",
    "\u0002\u0002\u0002\u00b2\u00ae\u0003\u0002\u0002\u0002\u00b3\u00b6\u0003",
    "\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003",
    "\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0007\u0007\u0002\u0002\u00b8\u0015\u0003",
    "\u0002\u0002\u0002\u00b9\u00bd\u0005 \u0011\u0002\u00ba\u00bd\u0005",
    "\"\u0012\u0002\u00bb\u00bd\u00056\u001c\u0002\u00bc\u00b9\u0003\u0002",
    "\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bb\u0003\u0002",
    "\u0002\u0002\u00bd\u0017\u0003\u0002\u0002\u0002\u00be\u00bf\t\u0002",
    "\u0002\u0002\u00bf\u0019\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007*",
    "\u0002\u0002\u00c1\u001b\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007*",
    "\u0002\u0002\u00c3\u001d\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007*",
    "\u0002\u0002\u00c5\u001f\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\u0018",
    "\u0002\u0002\u00c7\u00c8\u0005\u001c\u000f\u0002\u00c8\u00ca\u0007\u0005",
    "\u0002\u0002\u00c9\u00cb\u0005\u001e\u0010\u0002\u00ca\u00c9\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002",
    "\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002",
    "\u0002\u0002\u00ce\u00cf\u0007\u0007\u0002\u0002\u00cf!\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\u0007(\u0002\u0002\u00d1\u00d0\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002",
    "\u0002\u0002\u00d3\u00d4\u0005,\u0017\u0002\u00d4\u00d6\u0007+\u0002",
    "\u0002\u00d5\u00d7\u0005$\u0013\u0002\u00d6\u00d5\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00e1\u0003\u0002\u0002",
    "\u0002\u00d8\u00da\u0007(\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002",
    "\u0002\u00db\u00dc\u0005.\u0018\u0002\u00dc\u00de\u0007+\u0002\u0002",
    "\u00dd\u00df\u0005$\u0013\u0002\u00de\u00dd\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0003\u0002\u0002\u0002\u00df\u00e1\u0003\u0002\u0002\u0002",
    "\u00e0\u00d1\u0003\u0002\u0002\u0002\u00e0\u00d9\u0003\u0002\u0002\u0002",
    "\u00e1#\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007&\u0002\u0002\u00e3",
    "\u00e5\u0007*\u0002\u0002\u00e4\u00e6\u0005&\u0014\u0002\u00e5\u00e4",
    "\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6%",
    "\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007\u0019\u0002\u0002\u00e8\u00ed",
    "\u0005(\u0015\u0002\u00e9\u00ea\u0007\u001a\u0002\u0002\u00ea\u00ec",
    "\u0005(\u0015\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ef",
    "\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0003\u0002\u0002\u0002\u00ee\u00f0\u0003\u0002\u0002\u0002\u00ef\u00ed",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007\u001b\u0002\u0002\u00f1\'",
    "\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007+\u0002\u0002\u00f3\u00f4",
    "\u0007\u001c\u0002\u0002\u00f4\u00f5\u0005*\u0016\u0002\u00f5)\u0003",
    "\u0002\u0002\u0002\u00f6\u00f7\u0007+\u0002\u0002\u00f7+\u0003\u0002",
    "\u0002\u0002\u00f8\u00fb\u0005\u0018\r\u0002\u00f9\u00fb\u0005\u001a",
    "\u000e\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00f9\u0003\u0002",
    "\u0002\u0002\u00fb-\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007\u001d",
    "\u0002\u0002\u00fd\u00fe\u0005,\u0017\u0002\u00fe\u00ff\u0007\u001e",
    "\u0002\u0002\u00ff/\u0003\u0002\u0002\u0002\u0100\u0103\u0005.\u0018",
    "\u0002\u0101\u0103\u0005,\u0017\u0002\u0102\u0100\u0003\u0002\u0002",
    "\u0002\u0102\u0101\u0003\u0002\u0002\u0002\u01031\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0007\u001f\u0002\u0002\u0105\u010a\u00054\u001b",
    "\u0002\u0106\u0107\u0007\u001a\u0002\u0002\u0107\u0109\u00054\u001b",
    "\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010c\u0003\u0002\u0002",
    "\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002",
    "\u0002\u010b3\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0007*\u0002\u0002\u010e5\u0003\u0002\u0002\u0002",
    "\u010f\u0110\u0007 \u0002\u0002\u0110\u0111\u0007)\u0002\u0002\u0111",
    "\u0112\u00058\u001d\u0002\u01127\u0003\u0002\u0002\u0002\u0113\u0114",
    "\u0007%\u0002\u0002\u0114\u0115\u0007*\u0002\u0002\u01159\u0003\u0002",
    "\u0002\u0002\u0116\u0117\u0007\'\u0002\u0002\u0117\u0118\u0007*\u0002",
    "\u0002\u0118;\u0003\u0002\u0002\u0002%>@HLPTX\\bjrv{\u007f\u0088\u008d",
    "\u0091\u009b\u00a0\u00a4\u00ab\u00b0\u00b4\u00bc\u00cc\u00d1\u00d6\u00d9",
    "\u00de\u00e0\u00e5\u00ed\u00fa\u0102\u010a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'include'", "'\"'", "'{'", "';'", "'}'", "'double'", 
                     "'float'", "'int32'", "'int64'", "'uint32'", "'uint64'", 
                     "'sint32'", "'sint64'", "'fixed32'", "'fixed64'", "'sfixed32'", 
                     "'sfixed64'", "'bool'", "'string'", "'bytes'", "'timestamp'", 
                     "'enum'", "'('", "','", "')'", "':'", "'['", "']'", 
                     "'throws'", "'timeout'", "'async'", "'start'", "'stop'", 
                     "'queue'", "'->'", "'<-'", "'>>'", "'optional'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "ASYNC", "START", "STOP", 
                      "QUEUE", "TRANSITION_OP", "RETURN_OP", "ENQUEUE_OP", 
                      "OPTIONAL", "NUMBER", "MODEL_TYPE", "ID", "FILENAME", 
                      "COMMENT", "LINE_COMMENT", "WS" ];

var ruleNames =  [ "file", "include", "model", "block", "statement", "block_with_timeout", 
                   "block_with_timeout_statement", "return_block", "return_block_statement", 
                   "return_block_with_timeout", "return_block_with_timeout_statement", 
                   "scalar_type", "model_type", "enum_type", "enum_value", 
                   "enumeration", "field", "async_source", "async_source_mapping", 
                   "async_source_mapping_parameter", "async_source_mapping_parameter_rename", 
                   "type", "collection", "return_type", "throw_type", "throw_parameter", 
                   "timeout", "transition", "enqueue" ];

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
StopParser.T__26 = 27;
StopParser.T__27 = 28;
StopParser.T__28 = 29;
StopParser.T__29 = 30;
StopParser.ASYNC = 31;
StopParser.START = 32;
StopParser.STOP = 33;
StopParser.QUEUE = 34;
StopParser.TRANSITION_OP = 35;
StopParser.RETURN_OP = 36;
StopParser.ENQUEUE_OP = 37;
StopParser.OPTIONAL = 38;
StopParser.NUMBER = 39;
StopParser.MODEL_TYPE = 40;
StopParser.ID = 41;
StopParser.FILENAME = 42;
StopParser.COMMENT = 43;
StopParser.LINE_COMMENT = 44;
StopParser.WS = 45;

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
StopParser.RULE_async_source_mapping = 18;
StopParser.RULE_async_source_mapping_parameter = 19;
StopParser.RULE_async_source_mapping_parameter_rename = 20;
StopParser.RULE_type = 21;
StopParser.RULE_collection = 22;
StopParser.RULE_return_type = 23;
StopParser.RULE_throw_type = 24;
StopParser.RULE_throw_parameter = 25;
StopParser.RULE_timeout = 26;
StopParser.RULE_transition = 27;
StopParser.RULE_enqueue = 28;

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
        this.state = 60; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 60;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case StopParser.T__0:
                this.state = 58;
                this.include();
                break;
            case StopParser.ASYNC:
            case StopParser.START:
            case StopParser.STOP:
            case StopParser.QUEUE:
            case StopParser.MODEL_TYPE:
                this.state = 59;
                this.model();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StopParser.T__0 || _la===StopParser.ASYNC || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (StopParser.START - 32)) | (1 << (StopParser.STOP - 32)) | (1 << (StopParser.QUEUE - 32)) | (1 << (StopParser.MODEL_TYPE - 32)))) !== 0));
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
        this.state = 64;
        this.match(StopParser.T__0);
        this.state = 65;
        this.match(StopParser.T__1);
        this.state = 66;
        this.match(StopParser.FILENAME);
        this.state = 67;
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

ModelContext.prototype.QUEUE = function() {
    return this.getToken(StopParser.QUEUE, 0);
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
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.START) {
                this.state = 69;
                this.match(StopParser.START);
            }

            this.state = 72;
            this.match(StopParser.MODEL_TYPE);
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 73;
                this.throw_type();
            }

            this.state = 76;
            this.block();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.STOP) {
                this.state = 77;
                this.match(StopParser.STOP);
            }

            this.state = 80;
            this.match(StopParser.MODEL_TYPE);
            this.state = 82;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 81;
                this.throw_type();
            }

            this.state = 84;
            this.block();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.QUEUE) {
                this.state = 85;
                this.match(StopParser.QUEUE);
            }

            this.state = 88;
            this.match(StopParser.MODEL_TYPE);
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 89;
                this.throw_type();
            }

            this.state = 92;
            this.block();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 93;
            this.match(StopParser.ASYNC);
            this.state = 94;
            this.match(StopParser.MODEL_TYPE);
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 95;
                this.throw_type();
            }

            this.state = 98;
            this.block_with_timeout();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 99;
            this.match(StopParser.ASYNC);
            this.state = 100;
            this.match(StopParser.MODEL_TYPE);
            this.state = 101;
            this.match(StopParser.RETURN_OP);
            this.state = 102;
            this.return_type();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 103;
                this.throw_type();
            }

            this.state = 106;
            this.return_block_with_timeout();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 108;
            this.match(StopParser.MODEL_TYPE);
            this.state = 109;
            this.match(StopParser.RETURN_OP);
            this.state = 110;
            this.return_type();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__28) {
                this.state = 111;
                this.throw_type();
            }

            this.state = 114;
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
        this.state = 118;
        this.match(StopParser.T__2);
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__26))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (StopParser.TRANSITION_OP - 35)) | (1 << (StopParser.ENQUEUE_OP - 35)) | (1 << (StopParser.OPTIONAL - 35)) | (1 << (StopParser.MODEL_TYPE - 35)))) !== 0)) {
            this.state = 119;
            this.statement();
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 120;
                this.match(StopParser.T__3);
            }

            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 128;
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

StatementContext.prototype.enqueue = function() {
    return this.getTypedRuleContext(EnqueueContext,0);
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
        this.state = 134;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 130;
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
        case StopParser.T__20:
        case StopParser.T__26:
        case StopParser.OPTIONAL:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 131;
            this.field();
            break;
        case StopParser.TRANSITION_OP:
            this.enterOuterAlt(localctx, 3);
            this.state = 132;
            this.transition();
            break;
        case StopParser.ENQUEUE_OP:
            this.enterOuterAlt(localctx, 4);
            this.state = 133;
            this.enqueue();
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
        this.state = 136;
        this.match(StopParser.T__2);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__26) | (1 << StopParser.T__29))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (StopParser.TRANSITION_OP - 35)) | (1 << (StopParser.ENQUEUE_OP - 35)) | (1 << (StopParser.OPTIONAL - 35)) | (1 << (StopParser.MODEL_TYPE - 35)))) !== 0)) {
            this.state = 137;
            this.block_with_timeout_statement();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 138;
                this.match(StopParser.T__3);
            }

            this.state = 145;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 146;
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

Block_with_timeout_statementContext.prototype.enqueue = function() {
    return this.getTypedRuleContext(EnqueueContext,0);
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
        this.state = 153;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
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
        case StopParser.T__20:
        case StopParser.T__26:
        case StopParser.OPTIONAL:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.field();
            break;
        case StopParser.TRANSITION_OP:
            this.enterOuterAlt(localctx, 3);
            this.state = 150;
            this.transition();
            break;
        case StopParser.T__29:
            this.enterOuterAlt(localctx, 4);
            this.state = 151;
            this.timeout();
            break;
        case StopParser.ENQUEUE_OP:
            this.enterOuterAlt(localctx, 5);
            this.state = 152;
            this.enqueue();
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
        this.state = 155;
        this.match(StopParser.T__2);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__26))) !== 0) || _la===StopParser.OPTIONAL || _la===StopParser.MODEL_TYPE) {
            this.state = 156;
            this.return_block_statement();
            this.state = 158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 157;
                this.match(StopParser.T__3);
            }

            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 165;
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
        this.state = 169;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
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
        case StopParser.T__20:
        case StopParser.T__26:
        case StopParser.OPTIONAL:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
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
        this.state = 171;
        this.match(StopParser.T__2);
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20) | (1 << StopParser.T__21) | (1 << StopParser.T__26) | (1 << StopParser.T__29))) !== 0) || _la===StopParser.OPTIONAL || _la===StopParser.MODEL_TYPE) {
            this.state = 172;
            this.return_block_with_timeout_statement();
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.T__3) {
                this.state = 173;
                this.match(StopParser.T__3);
            }

            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 181;
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
        this.state = 186;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 183;
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
        case StopParser.T__20:
        case StopParser.T__26:
        case StopParser.OPTIONAL:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 184;
            this.field();
            break;
        case StopParser.T__29:
            this.enterOuterAlt(localctx, 3);
            this.state = 185;
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
        this.state = 188;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopParser.T__5) | (1 << StopParser.T__6) | (1 << StopParser.T__7) | (1 << StopParser.T__8) | (1 << StopParser.T__9) | (1 << StopParser.T__10) | (1 << StopParser.T__11) | (1 << StopParser.T__12) | (1 << StopParser.T__13) | (1 << StopParser.T__14) | (1 << StopParser.T__15) | (1 << StopParser.T__16) | (1 << StopParser.T__17) | (1 << StopParser.T__18) | (1 << StopParser.T__19) | (1 << StopParser.T__20))) !== 0))) {
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
        this.state = 190;
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
        this.state = 192;
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
        this.state = 194;
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
        this.state = 196;
        this.match(StopParser.T__21);
        this.state = 197;
        this.enum_type();
        this.state = 198;
        this.match(StopParser.T__2);
        this.state = 200; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 199;
            this.enum_value();
            this.state = 202; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===StopParser.MODEL_TYPE);
        this.state = 204;
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

FieldContext.prototype.OPTIONAL = function() {
    return this.getToken(StopParser.OPTIONAL, 0);
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
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.OPTIONAL) {
                this.state = 206;
                this.match(StopParser.OPTIONAL);
            }

            this.state = 209;
            this.type();
            this.state = 210;
            this.match(StopParser.ID);
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.RETURN_OP) {
                this.state = 211;
                this.async_source();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.OPTIONAL) {
                this.state = 214;
                this.match(StopParser.OPTIONAL);
            }

            this.state = 217;
            this.collection();
            this.state = 218;
            this.match(StopParser.ID);
            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===StopParser.RETURN_OP) {
                this.state = 219;
                this.async_source();
            }

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

Async_sourceContext.prototype.async_source_mapping = function() {
    return this.getTypedRuleContext(Async_source_mappingContext,0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(StopParser.RETURN_OP);
        this.state = 225;
        this.match(StopParser.MODEL_TYPE);
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StopParser.T__22) {
            this.state = 226;
            this.async_source_mapping();
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

function Async_source_mappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_async_source_mapping;
    return this;
}

Async_source_mappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Async_source_mappingContext.prototype.constructor = Async_source_mappingContext;

Async_source_mappingContext.prototype.async_source_mapping_parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Async_source_mapping_parameterContext);
    } else {
        return this.getTypedRuleContext(Async_source_mapping_parameterContext,i);
    }
};

Async_source_mappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterAsync_source_mapping(this);
	}
};

Async_source_mappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitAsync_source_mapping(this);
	}
};




StopParser.Async_source_mappingContext = Async_source_mappingContext;

StopParser.prototype.async_source_mapping = function() {

    var localctx = new Async_source_mappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, StopParser.RULE_async_source_mapping);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(StopParser.T__22);
        this.state = 230;
        this.async_source_mapping_parameter();
        this.state = 235;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StopParser.T__23) {
            this.state = 231;
            this.match(StopParser.T__23);
            this.state = 232;
            this.async_source_mapping_parameter();
            this.state = 237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 238;
        this.match(StopParser.T__24);
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

function Async_source_mapping_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_async_source_mapping_parameter;
    return this;
}

Async_source_mapping_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Async_source_mapping_parameterContext.prototype.constructor = Async_source_mapping_parameterContext;

Async_source_mapping_parameterContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

Async_source_mapping_parameterContext.prototype.async_source_mapping_parameter_rename = function() {
    return this.getTypedRuleContext(Async_source_mapping_parameter_renameContext,0);
};

Async_source_mapping_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterAsync_source_mapping_parameter(this);
	}
};

Async_source_mapping_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitAsync_source_mapping_parameter(this);
	}
};




StopParser.Async_source_mapping_parameterContext = Async_source_mapping_parameterContext;

StopParser.prototype.async_source_mapping_parameter = function() {

    var localctx = new Async_source_mapping_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, StopParser.RULE_async_source_mapping_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(StopParser.ID);
        this.state = 241;
        this.match(StopParser.T__25);
        this.state = 242;
        this.async_source_mapping_parameter_rename();
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

function Async_source_mapping_parameter_renameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_async_source_mapping_parameter_rename;
    return this;
}

Async_source_mapping_parameter_renameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Async_source_mapping_parameter_renameContext.prototype.constructor = Async_source_mapping_parameter_renameContext;

Async_source_mapping_parameter_renameContext.prototype.ID = function() {
    return this.getToken(StopParser.ID, 0);
};

Async_source_mapping_parameter_renameContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterAsync_source_mapping_parameter_rename(this);
	}
};

Async_source_mapping_parameter_renameContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitAsync_source_mapping_parameter_rename(this);
	}
};




StopParser.Async_source_mapping_parameter_renameContext = Async_source_mapping_parameter_renameContext;

StopParser.prototype.async_source_mapping_parameter_rename = function() {

    var localctx = new Async_source_mapping_parameter_renameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, StopParser.RULE_async_source_mapping_parameter_rename);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(StopParser.ID);
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
    this.enterRule(localctx, 42, StopParser.RULE_type);
    try {
        this.state = 248;
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
        case StopParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 246;
            this.scalar_type();
            break;
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 247;
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
    this.enterRule(localctx, 44, StopParser.RULE_collection);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this.match(StopParser.T__26);
        this.state = 251;
        this.type();
        this.state = 252;
        this.match(StopParser.T__27);
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
    this.enterRule(localctx, 46, StopParser.RULE_return_type);
    try {
        this.state = 256;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 254;
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
        case StopParser.T__20:
        case StopParser.MODEL_TYPE:
            this.enterOuterAlt(localctx, 2);
            this.state = 255;
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
    this.enterRule(localctx, 48, StopParser.RULE_throw_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(StopParser.T__28);
        this.state = 259;
        this.throw_parameter();
        this.state = 264;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StopParser.T__23) {
            this.state = 260;
            this.match(StopParser.T__23);
            this.state = 261;
            this.throw_parameter();
            this.state = 266;
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
    this.enterRule(localctx, 50, StopParser.RULE_throw_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
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
    this.enterRule(localctx, 52, StopParser.RULE_timeout);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(StopParser.T__29);
        this.state = 270;
        this.match(StopParser.NUMBER);
        this.state = 271;
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
    this.enterRule(localctx, 54, StopParser.RULE_transition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(StopParser.TRANSITION_OP);
        this.state = 274;
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

function EnqueueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopParser.RULE_enqueue;
    return this;
}

EnqueueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnqueueContext.prototype.constructor = EnqueueContext;

EnqueueContext.prototype.ENQUEUE_OP = function() {
    return this.getToken(StopParser.ENQUEUE_OP, 0);
};

EnqueueContext.prototype.MODEL_TYPE = function() {
    return this.getToken(StopParser.MODEL_TYPE, 0);
};

EnqueueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.enterEnqueue(this);
	}
};

EnqueueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopListener ) {
        listener.exitEnqueue(this);
	}
};




StopParser.EnqueueContext = EnqueueContext;

StopParser.prototype.enqueue = function() {

    var localctx = new EnqueueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, StopParser.RULE_enqueue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(StopParser.ENQUEUE_OP);
        this.state = 277;
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
