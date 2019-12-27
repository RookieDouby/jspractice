function getIterator(list) {
  var i = 0;
  return {
    next: function() {
      var done = i >= list.length;
      var value = !done ? list[i++] : undefined;
      return {
        value, done
      }
    }
  }
}

var it = getIterator(["a", "b", "c"])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())