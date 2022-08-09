// Immediately_invoked_function_expression (IIFE)
// ham thuc thi 1 lan luc khoi tao (init)
// "counter" is a function that returns an object with properties, which in this case are functions.
let counter = (function () {
    let i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
})();

// These calls access the function properties returned by "counter".
console.log(counter.get());       // 0
console.log(counter.set(3));
console.log(counter.increment()); // 4
console.log(counter.increment()); // 5