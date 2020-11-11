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
      } else {
        minIndex = getMinIndexInArr(_arr);
        item.style.left = oItems[minIndex].offsetLeft + 'px';
        item.style.top = (_arr[minIndex] + 10) + 'px';
        // 最小高度一行添加一张图片以后，需要更新该行的高度
        _arr[minIndex] += item.offsetHeight + 10;
      }
    }
    console.log()
    console.log(_arr)
  }

  const getMinIndexInArr = (arr) => {
    return [].indexOf.call(arr, Math.min.apply(null, arr))
  }

  window.onload = () => {
    init();
  }
})(document)