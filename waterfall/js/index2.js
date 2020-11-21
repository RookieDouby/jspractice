;(function(doc) {
  var WaterFall = function(wrapper, opt) {
    this.oWrapper = document.getElementsByClassName(wrapper)[0];
    this.column = opt.column;
    this.gap = opt.gap;
    this.itemWidth = (this.oWrapper.offsetWidth - (this.column - 1) * this.gap) / this.column;
    this.pageNum = 0;
    this.pageSize = 0;
    this.heightArr = []; // 前5个高度
    

    console.log(this.oWrapper, this.column, this.gap);
  }

  WaterFall.prototype = {
    init: function() {
      this.bindEvent()
    },
    bindEvent: function() {

    },
    scrollToBtn: function() {

    },
    getImgData: function() {
      // http://shibe.online/api/shibes?count=20 接口获取20张图片的接口 
    },
    renderList: function() {
      
    },

  }

  window.WaterFall = WaterFall;
})(document)