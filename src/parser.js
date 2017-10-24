/**
 * Created by shenwudi on 2017/9/25.
 */
import Lexer from './lexer.js'
import { 
    JsObject,
    JsString,
    JsNumber,
    IfStatement,
    ElseStatement,
    ElseIfStatement, 
} from './js_object.js'

//获取class里的所有方法 Object.getOwnPropertyNames(Object.getPrototypeOf(this))，如果所有方法都是定义在原型上的
class Parser{
    constructor(tokens){
        this.tokens = tokens
        this.curr = 0
        this.elems = []
        this.kws = Lexer.Keywords
        this.ops = Lexer.Operator
    }
    //parser utils
    match(tokenType){
        if(this.tokens[this.curr].type == tokenType){
            this.curr++
            return true
        }
        else{
            return false
        }
    }
    parse(){
        var _this = this
        var types = [
            'string',
            'number',
            'ident',
        ]
        var kws = Lexer.Keywords
        var kwKeys = Object.keys(kws)

        types = types.concat(kwKeys)

        var parsers = ['parseString','parseNumber','parseIdent'].concat(
            kwKeys.map(function (v,k) {
                return 'parse'+ v
            })
        )
        //console.log(parsers)

        types.forEach(function (v,k) {
            var token =  _this.tokens[_this.curr] || undefined
            if(token && v == token.type){
                var index = types.indexOf(v)
                var node = _this[parsers[index]]() // call parser function

                _this.elems.push(node)
            }
        })
        console.log(_this.elems)
    }
    // basic parsers
    parseString(){
        return new JsString(this.tokens[this.curr++])
    }
    parseNumber(){
        return new JsNumber(this.tokens[this.curr++])
    }
    parseIdent(){
        //func call
        //variable
    }
    parseBreak(){}
    parseElse(){}
    parseNew(){}
    parseVar(){}
    parseTypeof(){}
    parseCase(){}
    parseFinally(){}
    parseReturn(){}
    parseVoid(){}
    parseCatch(){}
    parseIf(){
        var startToken = this.tokens[this.curr++]
        match(this.kws.If)
        this.curr++
        match(this.ops.LBrace)
        this.curr++
        var exp = parseExpression()
        this.curr++
        var block
        if(match(this.ops.LBracket)){
            block = parseBlock()
        }
        return new IfStatement(startToken,exp,block)
    }
    parseWhile(){}
    parseFor(){}
    parseSwitch(){}
    parseDefault(){}
    parseThrow(){}
    parseDelete(){}
    parseIn(){}
    parseTry(){}
    parseDo(){}
    parseInstanceof(){}
    parseFunc(){}
    parseUndefine(){}
    parseNull(){}
    parseTrue(){}
    parseFalse(){}

    //advance parsers
    parseExpression(){

    }
    parseStatement(){

    }
    parseBlock(){

    }
}

export default Parser