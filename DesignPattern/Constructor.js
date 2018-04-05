/**
 * @author JINX_NHI on 4/4/2018.
 *
 * - Một constructor là 1 phương thức đặt biệt dùng để tạo 1 đối tượng. Trong JS khi tạo 1 đối tượng sẽ tạo ra 1 vùng nhớ cho nó
 * - Chúng ta có 3 cách tạo ra 1 đối tượng như sau:
 */

/**
 * Chúng ta chỉ dùng cách cuối cùng để test trong suốt quá trình làm việc với đối tượng trong JS
 * */
// var newObject = {};
// var newObject = Object.create( Object.prototype );
var newObject = new Object();


/**
 * Set và get cho newObject 1 properties name có giá trị là 'hau'
 * */

/**
 * Cách 1:
 * */
newObject.name1 = 'hau';
var name1 = newObject.name1;

/**
 * Cách 2:
 * */

newObject['name2'] = 'hau';
var name2 = newObject['name2'];


/**
 * Cách 3:
 * */

Object.defineProperty(newObject, 'name3', {
    value: 'hau',
    writable: true,
    enumerable: true,
    configurable: true
});

var name3 = newObject.name3;

/**
 * Cách 4:
 * */

Object.defineProperties(newObject, {
    'name4': {value: 'hau4', writable: true, enumerable: true, configurable: true},
    'name5': {value: 'hau5', writable: true, enumerable: true, configurable: true}
});


/**
 * Trong JS không có khái niệm class, tuy nhiên chúng ta có thể tạo 1 đối tượng bằng từ khóa new. Nó được xác định bởi 1 function
 * Cùng xét ví dụ bên dưới
 * */

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.toString = function () {
        return this.name + "\t" + this.age;
    };
}


var p1 = new Person('hua',15);


/**
 * Trong JavaScript, trừ undefined, toàn bộ các kiểu còn lại đều là object.
 * Các kiểu string, số, boolean lần lượt là object dạng String, Number, Boolean. Mảng là object dạng Array, hàm là object dạng Function.
 * Prototype của mỗi object chính là cha của nó, cha của String là String.prototype, cha của Number là Number.prototype, của Array là Array.prototype.
 * */

function Car( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;

}

Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// Sử dụng:

var civic = new Car( "Honda Civic", 2009, 20000 );












