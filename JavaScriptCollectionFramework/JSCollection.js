/**
 * @author Nguyễn Tấn Hậu
 * @since 4/4/2018
 * @version 1.0.0
 * @supported Java collection framework
 * */

//region Iterable
/**
 * ---------------------------------------------Iterable interface---------------------------------------------------
 * */
function Iterable() {}
/**
 * Trả về 1 iterator để hỗ trợ duyệt 1 danh sách các phần tử
 * @see Iterator
 *
 * */
Iterable.prototype.iterator = function () {};

/**
 * Phương thức hỗ trợ duyệt tuần tự các phần tử trong collection
 * */
Iterable.prototype.forEach = function (callback,thisArg) {};

/**
 * Chưa được hỗ trợ trong phiên bản này
 * */
Iterable.prototype.spliterator = function () {throw new Error("Operation un support in this version");};
//endregion

//region Collection
/**
 * ------------------------------------------Collection interface---------------------------------------------------
 * */
Collection.prototype = Iterable;
function Collection() {}
// Các tác vụ truy vấn

/**
 * Trả về 1 number là số phần tử của collection
 * */
Collection.prototype.size = function () {};

/**
 * Trả về 1 Boolean. True nếu collection rỗng và False nếu ngược lại
 * */
Collection.prototype.isEmpty=function () {};

/**
 * Kiểm tra o có nằm trong collection hay không.
 * @see o.equals(that)
 * @param o - o là 1 đối tượng cụ thể
 * Trả về Boolean. True nếu o nằm trong collection và Flase nếu ngược lại
 * @throws Error - Nếu o là undefined hoặc null hoặc không phải là 1 đối tượng
 * */
Collection.prototype.contains = function (o) {};

/**
 * Trả về 1 mảng các đối tượng hiện có trong collection
 * */
Collection.prototype.toArray = function () {};

/**
 * Trả về 1 mảng các đối tượng hiện có trong collection. Nếu array không phải là 1 Collection thì sẽ bỏ qua array, ngược lại tất
 * cả các phần tử của collection cũng sẽ được gán cho array
 * @param array - 1 collection được truyền vào
 *
 * */
Collection.prototype.toArray = function (array) {};

/**
 * Thêm 1 phần tử vào collection hiện tại
 * @param o - o là 1 đối tượng
 * @return true nếu collection có sự thay đổi, false nếu thêm không thành công
 * */
Collection.prototype.add = function (o,index) {};

/**
 * Xóa đi 1 phần tử trong collection. Kiểm tra dựa vào phương thức equals của o
 * @param o - o là 1 đối tượng
 *
 * @return true nếu collection có sự thay đổi, false nếu xóa không thành công
 * @throws Error nếu o là undefined hoặc null hoặc không phải là 1 đối tượng
 *
 * */
Collection.prototype.remove = function (o) {};

// Bulk Operations
/**
 * Phương thức kiểm tra toàn bộ element của c có nằm trong collection hiện tại không
 * @param c - c là 1 Collection
 * @return true nếu toàn bộ đều nằm trong collection hoặc false nếu 1 phần tử nào đó không thuộc collection
 *
 * */
Collection.prototype.containsAll = function (c) {};

/**
 * Thêm toàn bộ phần tử của c vào collection hiện tại.
 * @param c - 1 collection
 * @return true nếu collection có sự thay đổi, false nếu ngược lại
 * */
Collection.prototype.addAll = function (c,index) {};

/**
 * Xóa toàn bộ phần tử đang nằm trong c
 * @param c - c là 1 collection
 * @return true nếu collection có sự thay đổi ngược lại là false
 * */
Collection.prototype.removeAll = function (c) {};

/**
 * Kiểm tra xem Collection này chứa mọi phần tử mà Collection c chứa
 * @param c - 1 collection
 * @return true nếu collection chứa toàn bộ phần tử của c, false nếu ngược lại
 * */
Collection.prototype.retainAll = function (c) {};

/**
 * Phương thức xóa bằng phương pháp tổ chức lọc theo 1 vị từ (predicate) nào đó
 * @param predicate - vị từ
 * @return true nếu có sự thay đổi của collection và false nếu không có sự thay đổi
 * */
Collection.prototype.removeIf = function (predicate) {};

/**
 * Phương thức xóa đi toàn bộ dữ liệu trong collection
 * */
Collection.prototype.clear = function () {};
/**
 * Kiểm tra 1 collection hiện tại có giống hoàn toàn so với c hay không
 * @param c - collection cần kiểm tra với collection hiện tại
 * @return true nếu giống và false nếu ngược lại
 *
 * */
Collection.prototype.equals = function (c) {};

Collection.prototype.iterator = function () {};
Collection.prototype.forEach = function (callback,thisArg) {};
Collection.prototype.spliterator = function () {throw new Error("Operation un support in this version");};
//endregion

//region Iterator
/**-------------------------------------------------Iterator Interface--------------------------------------------------*/
/**
 * Tạo ra 1 Iterator để hỗ trợ duyệt các phần tử
 * */
function Iterator() {}

/**
 * Kiểm tra còn phần tử trong ống duyệt hay không
 * */
Iterator.prototype.hasNext = function () {};

/**
 * Trả về 1 phần tử kế tiếp
 * */
Iterator.prototype.next = function () {};

/**
 * Xóa đi phần tử trong ống duyệt
 * */
Iterator.prototype.remove = function () {throw new Error("Operation un support in this version")};
//endregion

//region ListIterator
/**-------------------------------------ListIterator interface-------------------------------------------------------*/
function ListIterator() {}
/**
 * Kiểm tra xem còn phần tử để duyệt tiếp về phía sau hay không.
 * @return boolean - true nếu còn false nếu không
 * */
ListIterator.prototype.hasNext = function () {};

/**
 * Kiểm tra xem còn phần tử duyệt về phía trước hay không
 * @return boolean - true nếu còn false nếu không
 * */
ListIterator.prototype.hasPrevious = function () {};

/**
 * Lấy con trỏ ở vị trí kế tiếp
 * @return obj
 * */
ListIterator.prototype.next = function () {};

/**
 * Lấy con trỏ ở vị trí sau đó
 * @return obj
 * */
ListIterator.prototype.previous = function () {};
//endregion


//region AbstractCollection
/**------------------------------------------Abstract collection class--------------------------------------------------*/
/**
 * Hiện thực 1 vài phương thức chung của cấu trúc Collection
 * */
function AbstractCollection() {}
AbstractCollection.prototype = Collection;
AbstractCollection.prototype.size = function () {};
AbstractCollection.prototype.iterator = function () {};
AbstractCollection.prototype.isEmpty = function () {
    return this.size() === 0;
};
AbstractCollection.prototype.contains = function (o) {
    var iter = this.iterator();
    if (o === undefined || o === null) {
        while (iter.hasNext()) {
            var obj = iter.next();
            if (obj === undefined || obj === null) {
                return true;
            }
        }
    } else {
        while (iter.hasNext()) {
            var obj = iter.next();
            if (obj.equals(o)) {
                return true;
            }
        }
    }
};

AbstractCollection.prototype.toArray = function () {
    var array = [];
    var iter = this.iterator();
    while (iter.hasNext()) {
        array.push(iter.next());
    }
    return array;
};

AbstractCollection.prototype.toArray = function (array) {
    // hiện thực sau
};

AbstractCollection.prototype.add = function (o,index) {
    throw  new Error("Operation un support");
};

AbstractCollection.prototype.addAll = function (o,index) {
    throw  new Error("Operation un support");
};

AbstractCollection.prototype.remove = function (o) {
    throw new Error("Operation un support");
};

AbstractCollection.prototype.removeAll = function (o) {
    throw new Error("Operation un support");
};

AbstractCollection.prototype.containsAll = function (c) {
    var iter = c.iterator();
    while(iter.hasNext()){
        if(!this.contains(iter.next())){
            return false;
        }
    }
    return true;
};

AbstractCollection.prototype.equals = function (c) {return this === c};
//endregion

//region List
/**------------------------------------List interface----------------------------------------------------------------*/
function List() {}
List.prototype = Collection;
List.prototype.size = function () {};
List.prototype.isEmpty = function () {};
List.prototype.contains = function () {};
List.prototype.iterator = function () {};
List.prototype.toArray = function () {};
List.prototype.toArray = function (array) {};
List.prototype.add = function (o,index) {};
List.prototype.remove = function (o) {};
List.prototype.containsAll = function (c) {};
List.prototype.addAll = function (c,index) {};
List.prototype.retainAll = function (o) {};
List.prototype.replaceAll = function (operator) {};
List.prototype.sort = function (comparator,typeSort) {};
List.prototype.search = function (comparator,typeSearch) {};
List.prototype.clear = function () {};
List.prototype.equals = function (c) {};
List.prototype.get = function (index) {};
List.prototype.set = function (index,element) {};
List.prototype.remove = function (index) {};
List.prototype.indexOf = function (o) {};
List.prototype.lastIndexOf = function (o) {};
List.prototype.listIterator = function (index) {};
List.prototype.subList = function (fromIndex, toIndex) {};
List.prototype.fill = function (o) {};
List.prototype.stream = function () {};
List.prototype.reverse = function () {};
List.prototype.toString = function () {};
//endregion


