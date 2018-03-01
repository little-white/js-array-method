Array.prototype.myFilter = function(cb, obj){
  var arr = []
  for(var i=0; i<this.length; i++){
    if(cb.call(obj, this[i])) {
      arr.push(this[i])
    }
  }

  return arr
}
