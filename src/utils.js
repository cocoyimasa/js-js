/**
 * Created by shenwudi on 2017/9/24.
 */
var $$ = {}

var log = console.log.bind(console)

$$.extend = function (dest,src) {
    var keys = Object.keys(src)
    for(var i=0;i<keys.length;i++){
        var k = keys[i]
        dest[k] = src[k]
    }
}

export {
    log,
    $$,
}