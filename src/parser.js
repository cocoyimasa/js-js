/**
 * Created by shenwudi on 2017/9/25.
 */
import Lexer from './lexer.js'

//获取class里的所有方法 Object.getOwnPropertyNames(Object.getPrototypeOf(this))，所有方法都是定义在原型上的
class Parser{
    constructor(tokens){
        this.tokens = tokens
        this.curr = 0
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
        console.log(parsers)

        types.forEach(function (v,k) {
            if(v == _this.tokens[_this.curr].type){
                var index = types.indexOf(v)
                parsers[index]() // call parser function
            }
        })
    }
    parseString(){}
    parseNumber(){}
    parseIdent(){
        //func call
        //variable
    }
    parseBreak (){}
    parseElse (){}
    parseNew (){}
    parseVar (){}
    parseTypeof (){}
    parseCase (){}
    parseFinally (){}
    parseReturn (){}
    parseVoid (){}
    parseCatch (){}
    parseIf (){}
    parseWhile (){}
    parseFor (){}
    parseSwitch (){}
    parseDefault (){}
    parseThrow (){}
    parseDelete (){}
    parseIn (){}
    parseTry (){}
    parseDo (){}
    parseInstanceof (){}
    parseFunc (){}
    parseUndefine (){}
    parseNull (){}
    parseTrue (){}
    parseFalse (){}
}

export default Parser