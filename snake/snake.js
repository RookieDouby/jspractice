/**
 * Created by sam on 17-1-9.
 */
Star = {
    init: function () {
        var container = this.appendEle(this.addStyle(this.createEle(),{w:'900',h:'600',p:'absolute','top':10, 'left':10}));
        for(var i = 0; i < 600/30; i++) {
            Star.data.arrayAll[i] = [];
            for(var j = 0; j < 900/30; j++) {
                var div = this.addStyle(this.createEle(),{w:30, h:30,float:'left',border:'1px solid #666'});
                div.setAttribute('number', i*30+j);
                this.appendEle(div, container);
                Star.data.arrayAll[i][j] = div;
            }
        }
        container = this.appendEle(this.addStyle(this.createEle(),{w:'900',h:'600',p:'absolute',top:10,l:10}));

        this.pushEleInSelect(Star.data.arrayAll[9][15], Star.data.arrayAll[9][14], Star.data.arrayAll[9][13]); //start postion of initial snake
        this.keyBoard.apply(this, arguments);
    },
    createEle: function (tag) {
        var tagName = tag || 'DIV';
        return document.createElement(tagName);
    },
    appendEle: function (child, father) {
        var father = father || document.body || document.documentElement;
        father.appendChild(child);
        return child;
    },
    addStyle: function (ele, css) {
        for (var i in css) {
            switch (i) {
                case 'w':
                    ele.style.width = css[i] + 'px';
                    break;
                case 'h':
                    ele.style.height = css[i] + 'px';
                    break;
                case 'p':
                    ele.style.position = css[i];
                    break;
                case 'left':
                    ele.style.left = css[i] + '%';
                    break;
                case 'right':
                    ele.style.right = css[i] + '%';
                    break;
                case 'top':
                    ele.style.top = css[i] + '%';
                    break;
                case 'bottom':
                    ele.style.bottom = css[i] + '%';
                    break;
                case 'background':
                    ele.style.background = css[i] + '%' || css[i] + 'px';
                    break;
                case 'float':
                    ele.style.cssFloat = css[i];
                    ele.style.styleFloat = css[i];
                    break;
                default:
                    ele.style[i] = css[i];
                    break;
            }
        }
        return ele;
    },
    pushEleInSelect: function () {
        for(var i = 0; i < arguments.length; i++) {
            Star.data.arraySelect = [arguments[i]].concat(Star.data.arraySelect);
            this.addStyle(arguments[i],{b:'#f00'});
        }
    },
    keyBoard: function () {
        var self = this;
        document.onkeydown = function (e) {
            var e = e || window.event;
            switch(e.keyCode){
                case 37: if(Star.keycode == 37 || Star.keycode == 39){return;} self.leftGo();   break;
                case 38: if(Star.keycode == 38 || Star.keycode == 40){return;} self.upGo();     break;
                case 39: if(Star.keycode == 37 || Star.keycode == 39){return;} self.rightGo();  break;
                case 40: if(Star.keycode == 38 || Star.keycode == 40){return;} self.downGo();   break;
            }
        }
    },
    leftGo: function () {
        var div, number, self = this;
        Star.keycode = 37;
        clearInterval(Star.timeInterval.timeA);
        Star.timeInterval.timeA = setInterval(function () {
            number = Star.data.arraySelect[0].getAttribute('number');//get the index of Snake head (i *30 + j)
            if(number % 30 <= 0 || self.hasInArray(number-1, Star.data.arraySelect)) {
                self.endGame(); // if crash into the border END GAME;
            } else {
                //if next move not crashing into the border, snake moves left
                // if(Star.data.foodNumber == number - 1)
            }
        },Star.timeInterval.speed);
    },
    hasInArray: function (number, array) {
        for(var i in array) {
            if(array[i] instanceof Array) {
                if(this.hasInArray(number, array[i])) {
                    return true;
                }
            }
            if(array[i].getAttribute && array[i].getAttribute('number') == number) return true;
        }
    }
};

Star.timeInterval = {
    timeA : null,
    timeB : null
};

Star.data = {
    arrayAll: [],
    arraySelect: [], //save the body of snake, three for initialization
    newPoint:null,
    foodNumber:0
};

Star.keycode = 0;

window.onload = function () {
    //create select component
    var select = Star.createEle('select');
    var optionDefault = Star.createEle('option');
    optionDefault.innerHTML = 'Please choose a area';
    optionDefault.setAttribute('disabled','disabled');
    Star.appendEle(optionDefault, select);
    Star.addStyle(select,{w:200,h:30,p:'absolute',left:'40',top:'10'});
    for(var i = 0; i < 10; i ++) {
        var option = Star.createEle('option');
        option.innerHTML = 'Number ' + (i+1) + ' Area';
        Star.appendEle(option,select);
    }
    Star.appendEle(select);
    select.onchange = function () {
        var selectValue = select.options[select.selectedIndex].value || select.options[select.selectedIndex].innerHTML;
        var number = selectValue.match(/\d+/)[0];
        //set speed of snake for specific area
        Star.timeInterval.speed = parseInt(200/number);
        Star.addStyle(select,{display: 'none'});
        Star.init();
        
    }
};