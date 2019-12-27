function modifyIterator(arr) {
  arr[Symbol.iterator] = function() {
    var i = 0;
    var self = this;
    return {
      next: function() {
        var done = i >= self.length;
        var value = !done ? this[i ++] : undefined;
        return {
          value,done
        }
      }
    }
  }
}

var arr = [100, 200, 300]
for(var o of arr) {
  console.log(o)
}