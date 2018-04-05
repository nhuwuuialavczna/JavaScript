function ArrayList() {
    this.list = [];
}

ArrayList.prototype.add = function (o) {
  this.list.push(o);
};

ArrayList.prototype.forEach = function (callback) {
    this.list.forEach(callback);
};

ArrayList.prototype.contains = function (o) {
    var is = false;
    this.forEach(function (value,index) {
        if(value === o) {
            is = true;
        }
    });
    return is;
};

var l = new ArrayList();
l.add(2);
l.add(3);
l.add(4);

console.log(l.contains(2));
