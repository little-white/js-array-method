Array.prototype.myMap = function(cb, obj){
    var arr = []
    for(var i=0, len=this.length; i<len; i++){
        arr.push(cb.apply(obj, [this[i], i, this]))
    }

    return arr
}
