/**
 * Created by shenwudi on 2017/9/24.
 */
import { log } from './utils.js'
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
    constructor(line,column,type,value){
        this.line = line
        this.column = column
        this.type = type
        this.value = value
    }
}

var tokenizer = function (source,debug) {
    var spaceExp = /^\s+/
    var numExp = /^\d+/
    var identExp = /^[a-zA-Z0-9_$]+/
    var strExp = /^"(?:\\.|[^"])*"|^'(?:\\.|[^'])*'/ //(?:)非捕获组--括号里的内容不捕获

    var regexps = []

    var opKeys = Object.keys(Operator)
    var kwKeys = Object.keys(Keywords)

    for(let i=0;i<opKeys.length;i++){
        // console.log(Operator[opKeys[i]])
        let k = opKeys[i]
        let x = new RegExp('^'+Operator[k])
        regexps.push([k , x])
    }

    for(let i=0;i<kwKeys.length;i++){
        // console.log(Keywords[kwKeys[i]])
        let k = kwKeys[i]
        let x = new RegExp('^'+Keywords[k])
        regexps.push([k , x])
    }

    regexps.push(['number',numExp])
    regexps.push(['ident',identExp])
    regexps.push(['string',strExp])
    regexps.push(['space',spaceExp])

    var src = source
    var debugRes = []
    var tokens = []
    var line = 0
    var column = 0
    while(src != ''){
        regexps.map(function (v,k) {
            let regex = v[1]
            if(regex.test(src)){
                var res = src.match(regex)[0]
                if(res == '\n' || res == '\r\n'){
                    line++
                    column = 0
                }
                column += res.length
                if(res.trim() != '' && res != '\n' && res != '\r\n'){
                    var token = new Token(line,column,v[0],res)
                    tokens.push(token)
                    debugRes.push(res)
                }
                src = src.slice(res.length)
            }
        })
    }

    if(debug){
        log(debugRes)
        return debugRes
    }
    else{
        log(tokens)
        return tokens
    }
}

export default {
    tokenizer,
    Keywords,
    Operator,
    Token,
}