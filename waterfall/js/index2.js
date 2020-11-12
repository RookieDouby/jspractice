;(function(doc) {
  var WaterFall = function(wrapper, options){
    this.oWrapper = doc.getElementsByClassName(wrapper)[0]
    this.column = options.column;
    this.gap = options.gap;

    console.log(this.oWrapper, this.column, this.gap)
  }


  window.WaterFall = WaterFall;
})(document)