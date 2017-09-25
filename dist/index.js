/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(2);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _utils = __webpack_require__(15);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = console.log.bind(console);
/*
*keywords:
* break else new var typeof
case finally return void
catch for switch while
default if throw delete
in try do instanceof
*
* */
/**
 * Created by shenwudi on 2017/9/24.
 */
var Keywords = {
    Break: 'break',
    Else: 'else',
    New: 'new',
    Var: 'var',
    Typeof: 'typeof',
    Case: 'case',
    Finally: 'finally',
    Return: 'return',
    Void: 'void',
    Catch: 'catch',
    If: 'if',
    While: 'while',
    For: 'for',
    Switch: 'switch',
    Default: 'default',
    Throw: 'throw',
    Delete: 'delete',
    In: 'in',
    Try: 'try',
    Do: 'do',
    Instanceof: 'instanceof',
    Func: 'function',
    Undefined: 'undefined',
    Null: 'null',
    True: 'true',
    False: 'false'
};

var Operator = {
    LSquare: '\\[',
    RSquare: '\\]',
    LBracket: '\\{',
    RBracket: '\\}',
    LBrace: '\\(',
    RBrace: '\\)',
    Comma: '\\,',
    Semi: '\\;',
    Colon: '\\:',
    Equal: '==',
    Bind: '=',
    Plus: '\\+',
    Minus: '\\-',
    Mul: '\\*',
    Div: '\\/',
    And: '&&',
    Or: '\\|\\|',
    Mod: '%',
    Not: '\\!',
    GE: '>=',
    LE: '<=',
    GT: '>',
    LT: '<',
    //SingleQuote:"\\'",
    //Quote:'\\"',
    Exclamation: '\\?',
    Point: '\\.',
    Enter: '[\\n|\\r\\n]'

    //type
};var TokenType = {
    String: 'string',
    Number: 'number',
    Keywords: Keywords,
    Operator: Operator
};

var Token = function Token(line, column, type, value) {
    (0, _classCallCheck3.default)(this, Token);

    this.line = line;
    this.column = column;
    this.type = type;
    this.value = value;
};

var tokenizer = function tokenizer(source, debug) {
    var spaceExp = /^\s+/;
    var numExp = /^\d+/;
    var identExp = /^[a-zA-Z0-9_$]+/;
    var strExp = /^[\".*\" | \'.*\']/;

    var regexps = [];

    var opKeys = (0, _keys2.default)(Operator);
    var kwKeys = (0, _keys2.default)(Keywords);

    for (var i = 0; i < opKeys.length; i++) {
        // console.log(Operator[opKeys[i]])
        var k = opKeys[i];
        var x = new RegExp('^' + Operator[k]);
        regexps.push([k, x]);
    }

    for (var _i = 0; _i < kwKeys.length; _i++) {
        // console.log(Keywords[kwKeys[i]])
        var _k = kwKeys[_i];
        var _x = new RegExp('^' + Keywords[_k]);
        regexps.push([_k, _x]);
    }

    regexps.push(['number', numExp]);
    regexps.push(['ident', identExp]);
    regexps.push(['string', strExp]);
    regexps.push(['space', spaceExp]);

    var src = source;
    var debugRes = [];
    var tokens = [];
    var line = 0;
    var column = 0;
    while (src != '') {
        regexps.map(function (v, k) {
            var regex = v[1];
            if (regex.test(src)) {
                var res = src.match(regex)[0];
                if (res == '\n' || res == '\r\n') {
                    line++;
                    column = 0;
                }
                column += res.length;
                if (res.trim() != '' && res != '\n' && res != '\r\n') {
                    var token = new Token(line, column, v[0], res);
                    tokens.push(token);
                    debugRes.push(res);
                }
                src = src.slice(res.length);
            }
        });
    }

    if (debug) {
        log(debugRes);
        return debugRes;
    } else {
        log(tokens);
        return tokens;
    }
};

exports.default = {
    tokenizer: tokenizer,
    Keywords: Keywords,
    Operator: Operator,
    Token: Token
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var ctx = __webpack_require__(24);
var hide = __webpack_require__(28);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(40);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(30);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lexer = __webpack_require__(6);

var _lexer2 = _interopRequireDefault(_lexer);

var _parser = __webpack_require__(14);

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by shenwudi on 2017/9/24.
 */
var Exception = function Exception(index, msg) {
    this.index = index;
    this.msg = msg;
};

// exp == expectVal ?
var assert = function assert(exp, res) {
    return exp == res;
};

// testcase('x',x,[v1,v2,v3,v4])
var testcase = function testcase(name, scope, values) {
    var len = Math.min(scope.length, values.length);
    for (var i = 0; i < len; i++) {
        if (!assert(scope[i], values[i])) {
            console.log(new Exception(i, name + ':错误: ' + scope[i] + ' 在[' + i + ']'));
        }
    }
};

var __main = function __main() {
    var debugTokenizer = function debugTokenizer(src) {
        return _lexer2.default.tokenizer(src, true);
    };
    testcase('var test', debugTokenizer('var x = 10'), ['var', 'x', '=', '10']);
    testcase('bool if test', debugTokenizer('if(x==10000){return true}'), ['if', '(', 'x', '==', '10000', ')', '{', 'return', 'true', '}']);
    testcase('string while test', debugTokenizer('var x = "x";y=10000;while(x){} '), ['var', 'x', '=', '"', 'x', '"', ';', 'y', '=', '10000', ';', 'while', '(', 'x', ')', '{', '}']);
    testcase('function test', debugTokenizer('function(x,y){m(c,x,y);}'), ['function', '(', 'x', ',', 'y', ')', '{', 'm', '(', 'c', ',', 'x', ',', 'y', ')', ';', '}']);
    var parser = new _parser2.default([1]);
    parser.parse();
};

__main();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(2);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _lexer = __webpack_require__(6);

var _lexer2 = _interopRequireDefault(_lexer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//获取class里的所有方法 Object.getOwnPropertyNames(Object.getPrototypeOf(this))，所有方法都是定义在原型上的
var Parser = function () {
    function Parser(tokens) {
        (0, _classCallCheck3.default)(this, Parser);

        this.tokens = tokens;
        this.curr = 0;
    }

    (0, _createClass3.default)(Parser, [{
        key: 'parse',
        value: function parse() {
            var _this = this;
            var types = ['string', 'number', 'ident'];
            var kws = _lexer2.default.Keywords;
            var kwKeys = (0, _keys2.default)(kws);

            types = types.concat(kwKeys);

            var parsers = ['parseString', 'parseIdent', 'parseNumber'].concat(kwKeys.map(function (v, k) {
                return 'parse' + v;
            }));
            console.log(parsers);

            types.forEach(function (v, k) {
                if (v == _this.tokens[_this.curr].type) {}
            });
        }
    }, {
        key: 'parseString',
        value: function parseString() {}
    }, {
        key: 'parseNumber',
        value: function parseNumber() {}
    }, {
        key: 'parseIdent',
        value: function parseIdent() {
            //func call
            //variable
        }
    }, {
        key: 'parseBreak',
        value: function parseBreak() {}
    }, {
        key: 'parseElse',
        value: function parseElse() {}
    }, {
        key: 'parseNew',
        value: function parseNew() {}
    }, {
        key: 'parseVar',
        value: function parseVar() {}
    }, {
        key: 'parseTypeof',
        value: function parseTypeof() {}
    }, {
        key: 'parseCase',
        value: function parseCase() {}
    }, {
        key: 'parseFinally',
        value: function parseFinally() {}
    }, {
        key: 'parseReturn',
        value: function parseReturn() {}
    }, {
        key: 'parseVoid',
        value: function parseVoid() {}
    }, {
        key: 'parseCatch',
        value: function parseCatch() {}
    }, {
        key: 'parseIf',
        value: function parseIf() {}
    }, {
        key: 'parseWhile',
        value: function parseWhile() {}
    }, {
        key: 'parseFor',
        value: function parseFor() {}
    }, {
        key: 'parseSwitch',
        value: function parseSwitch() {}
    }, {
        key: 'parseDefault',
        value: function parseDefault() {}
    }, {
        key: 'parseThrow',
        value: function parseThrow() {}
    }, {
        key: 'parseDelete',
        value: function parseDelete() {}
    }, {
        key: 'parseIn',
        value: function parseIn() {}
    }, {
        key: 'parseTry',
        value: function parseTry() {}
    }, {
        key: 'parseDo',
        value: function parseDo() {}
    }, {
        key: 'parseInstanceof',
        value: function parseInstanceof() {}
    }, {
        key: 'parseFunc',
        value: function parseFunc() {}
    }, {
        key: 'parseUndefine',
        value: function parseUndefine() {}
    }, {
        key: 'parseNull',
        value: function parseNull() {}
    }, {
        key: 'parseTrue',
        value: function parseTrue() {}
    }, {
        key: 'parseFalse',
        value: function parseFalse() {}
    }]);
    return Parser;
}(); /**
      * Created by shenwudi on 2017/9/25.
      */


exports.default = Parser;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(2);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by shenwudi on 2017/9/24.
 */
var $$ = {};

$$.log = console.log.bind(console);

$$.extend = function (dest, src) {
    var keys = (0, _keys2.default)(src);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        dest[k] = src[k];
    }
};

exports.default = $$;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(16);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(37);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(34);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(27);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(22)(false);
var IE_PROTO = __webpack_require__(35)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(31);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(0);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(11);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(11);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(10).f });


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(39);
var $keys = __webpack_require__(32);

__webpack_require__(33)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })
/******/ ]);