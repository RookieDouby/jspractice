function CreateArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear  = clear;
    this.setData = setData;
    this.swap = swap;

    for(var i = 0; i < numElements.length; ++i) {
        this.dataStore[i] = i;
    }
}
//初始化数据
function setData() {
    for(var i = 0; i < numElements.length; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < numElements.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[pos++] = element;
}

function toString() {
    var restr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + " ";
        if ()
    }
}
