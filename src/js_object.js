/**
 * Created by shenwudi on 2017/9/25.
 */
import {Token} from 'lexer.js'
class JsObject{
    constructor(token){
        this.token = token
        this.value = token.value
    }
    toString(){
        return this.token.value
    }
}

class JsString extends JsObject{
    constructor(token){
        super(token)
        this.length = token.value.length
    }
}

class JsNumber extends JsObject{
    constructor(token){
        super(token)
    }
}

class Statement extends JsObject{
    constructor(token){
        super(token)
    }
}

class IfStatement extends Statement{
    constructor(token,condtition,body){
        super(token)
        this.condtition = condtition
        this.body = body
    }
}

class ElseStatement extends Statement{
    constructor(token,body){
        super(token)
        this.body = body
    }
}

class ElseIfStatement extends Statement{
    constructor(token,body){
        super(token)
        this.condtition = condtition
        this.body = body
    }
}

//注：不能加default，否则不能使用import {} 格式
export {
    JsObject,
    JsString,
    JsNumber,
    IfStatement,
    ElseStatement,
    ElseIfStatement,
}