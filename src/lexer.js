/**
 * Created by shenwudi on 2017/9/24.
 */
import utils from './utils.js'

var log = console.log.bind(console)
/*
*keywords:
* break else new var typeof
case finally return void
catch for switch while
default if throw delete
in try do instanceof
*
* */
var Keywords = {
    Break:'break',
    Else:'else',
    New:'new',
    Var:'var',
    Typeof:'typeof',
    Case:'case',
    Finally:'finally',
    Return:'return',
    Void:'void',
    Catch:'catch',
    If:'if',
    While:'while',
    For:'for',
    Switch:'switch',
    Default:'default',
    Throw:'throw',
    Delete:'delete',
    In:'in',
    Try:'try',
    Do:'do',
    Instanceof:'instanceof',
    Func:'function',
    Undefined:'undefined',
    Null:'null',
    True:'true',
    False:'false',
}

var Operator = {
    LSquare:'\\[',
    RSquare:'\\]',
    LBracket:'\\{',
    RBracket:'\\}',
    LBrace:'\\(',
    RBrace:'\\)',
    Comma:'\\,',
    Semi:'\\;',
    Colon:'\\:',
    Equal:'==',
    Bind:'=',
    Plus:'\\+',
    Minus:'\\-',
    Mul:'\\*',
    Div:'\\/',
    And:'&&',
    Or:'\\|\\|',
    Mod:'%',
    Not:'\\!',
    GE:'>=',
    LE:'<=',
    GT:'>',
    LT:'<',
    //SingleQuote:"\\'",
    //Quote:'\\"',
    Exclamation:'\\?',
    Point:'\\.',
    Enter:'[\\n|\\r\\n]',
}

//type
var TokenType = {
    String:'string',
    Number:'number',
    Keywords:Keywords,
    Operator:Operator,
}

class Token{
    constructor(line,column,type){
        this.line = line
        this.column = column
        this.type = type
    }
}

var tokenizer = function (source) {
    var spaceExp = /^\s+/
    var numExp = /^\d+/
    var indentExp = /^[a-zA-Z0-9_$]+/
    var strExp = /^[\".*\" | \'.*\']/

    var regexps = []

    var opKeys = Object.keys(Operator)
    var kwKeys = Object.keys(Keywords)

    for(let i=0;i<opKeys.length;i++){
        // console.log(Operator[opKeys[i]])
        let x = new RegExp('^'+Operator[opKeys[i]])
        regexps.push(x)
    }

    for(let i=0;i<kwKeys.length;i++){
        // console.log(Keywords[kwKeys[i]])
        let x = new RegExp('^'+Keywords[kwKeys[i]])
        regexps.push(x)
    }

    regexps.push(numExp)
    regexps.push(indentExp)
    regexps.push(strExp)
    regexps.push(spaceExp)

    var src = source
    var tokens = []
    while(src != ''){
        regexps.map(function (v,k) {
            if(v.test(src)){
                var res = src.match(v)[0]
                if(res.trim() != ''){
                    tokens.push(res)
                }
                src = src.slice(res.length)
            }
        })
    }

    log(tokens)
    return tokens
}

export default {
    tokenizer
}