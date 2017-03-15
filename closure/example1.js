　 var name = "The Window";
   var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
            var _that = this;
　　　　　　return function(){
　　　　　　　　return _that.name;
　　　　　　};
　　　　}
　　};
　　console.log(object.getNameFunc()());