Array.prototype.mySome = function(cb, thisArg){
  var tag = false
  for(var i=0,len=this.length; i<len; i++){
    if(cb.call(thisArg, this[i], i, this)){
      tag = true
      break
    }
  }

  return tag
}
