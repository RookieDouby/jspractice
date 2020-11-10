;(function(doc) {
  const oItems = doc.getElementsByClassName('wf-item'),
        oItemsLen = oItems.length,
        _arr  = [];
  
  const init = () => {
    setImgPos();
  } 
  
  const setImgPos = () => {
    var item;
    for (let i = 0; i < oItemsLen; i ++) {
      item = oItems[i];
      item.style.width = '232px'

      if (i < 5) {
        _arr.push(item.offsetHeight);
        item.style.top = '0';
        if (i % 5 === 0) {
          item.style.left = '0';
        } else {
          item.style.left = (232 + 10) * i + 'px';
        }
      }
    }
    console.log(_arr)
  }

  window.onload = () => {
    init();
  }
})(document)