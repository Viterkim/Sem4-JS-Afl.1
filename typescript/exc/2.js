var myFunc = function (first, second, third) {
    var newArr = [first, second, third];
    return newArr;
};
var myFuncUpper = function (first, second, third) {
    var newArr = [first.toUpperCase, second.toUpperCase, third.toUpperCase];
    return newArr;
};
console.log(myFunc("hej", "med", "dig"));
console.log(myFuncUpper("hej", "med", "dig"));
