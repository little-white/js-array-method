Array.prototype.myEvery=function(callback, thisArg){
  var tag = true
  for(var i=0,len=this.length; i<len; i++){
    if(!callback.call(thisArg, this[i], i, this)){
      tag = false
      break
    }
  }

  return tag
}
