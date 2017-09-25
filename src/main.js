/**
 * Created by shenwudi on 2017/9/24.
 */
import Lexer from './lexer.js'
import Parser from './parser.js'

var Exception = function (index,msg) {
    this.index = index
    this.msg = msg
}

// exp == expectVal ?
var assert = function (exp,res) {
    return exp == res
}

// testcase('x',x,[v1,v2,v3,v4])
var testcase = function(name,scope,values){
    var len = Math.min(scope.length,values.length)
    for(let i=0;i<len;i++){
        if(!assert(scope[i],values[i])){
            console.log(new Exception(i,name+':错误: '+scope[i]+' 在['+i+']'))
        }
    }
}

var __main = function () {
    var debugTokenizer = function (src) {
        return Lexer.tokenizer(src,true)
    }
    testcase('var test',
        debugTokenizer('var x = 10'),
        ['var','x','=','10'])
    testcase('bool if test',
        debugTokenizer('if(x==10000){return true}'),
        ['if','(','x','==','10000',')','{','return','true','}'])
    testcase('string while test',
        debugTokenizer('var x = "x";y=10000;while(x){} '),
        ['var','x','=','"x"',';','y','=',
            '10000',';','while','(','x',')',
            '{','}'
        ])
    testcase('function test',
        debugTokenizer('function(x,y){m(c,x,y);}'),
        ['function','(','x',',','y',')','{','m',
        '(','c',',','x',',','y',')',';','}'])
    var tokens = Lexer.tokenizer('"test"')
    var parser = new Parser(tokens)
    parser.parse()
}

__main()