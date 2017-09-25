/**
 * Created by shenwudi on 2017/9/25.
 */
class JsObject{
    constructor(token){
        this.token = token
    }
    toString(){
        return this.token.value
    }
}

class JsString extends JsObject{
    constructor(token){
        super(token)
    }
}

//注：不能加default，否则不能使用import {} 格式
export {
    JsObject,
    JsString,
}