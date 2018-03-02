Array.prototype.myFilter = function(cb, obj){
  var arr = []
  for(var i=0,len=this.length; i<len; i++){
    if(cb.call(obj, this[i])){
       arr.push(this[i])
    }
  }

  return arr
}
