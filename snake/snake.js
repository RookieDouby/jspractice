/**
 * Created by sam on 17-1-9.
 */
Star = {
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
        for(var i in css) {
            switch(i) {
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
    }
};

window.onload = function () {
    //create select component
    var select = Star.createEle('select');
    var optionDefault = Star.createEle('option');
    optionDefault.innerHTML = 'Please choose a area';
    optionDefault.setAttribute('disabled','disabled');
    Star.appendEle(optionDefault, select);
    Star.addStyle(select,{w:200,h:30,p:'absolute',left:'40',top:'50'});
    for(var i = 0; i < 10; i ++) {
        var option = Star.createEle('option');
        option.innerHTML = 'Number ' + (i+1) + ' Area';
        Star.appendEle(option,select);
    }

    var body = document.getElementsByTagName('body')[0];
    Star.appendEle(select, body);
};