Array.prototype.myReduce = function(cb, initValue){
    if(!this.length && !initValue){
        throw new TypeError("myReduce of empty array with no initial value")
    }
    var currentIndex = initValue ? 0 : 1
    var accumulator = initValue ? initValue : this[0]

    for(var i=currentIndex, len=this.length; i<len; i++){
        accumulator = cb(accumulator, this[i], this)
    }

    return accumulator
}
