/**
 * Created by JINX_NHI on 4/4/2018.
 * Các mô-đun là một phần không thể thiếu của bất kỳ kiến trúc ứng dụng mạnh mẽ nào và thường giúp giữ cho các đơn vị mã cho một dự án được chia tách và tổ chức rõ ràng.
 */
var basketModule = (function () {
    var basket = [];

    function doSomethingPrivate() {
    }

    function doSomethingElsePrivate() {
    }

    return {
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    };
})();