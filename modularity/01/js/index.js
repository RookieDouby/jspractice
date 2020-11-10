function throttle(fn, delay) {
  var timer = null,
      begin = new Date().getTime();
  
  return function() {
    const curTime = new Date().getTime(),
          _self = this,
          args = arguments;
    
    clearTimeout(timer);
    if (curTime - begin > delay) {
      fn.apply(_self, args)
      begin = curTime;
    } else {
      timer = setTimeout(() => {
        fn.apply(_self, args)
      }, delay)
    }
  }
}

export default {
  throttle
}