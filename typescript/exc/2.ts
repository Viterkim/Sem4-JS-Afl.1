interface IBingo{
    (first: String, second: String, third: String): Array<String>;
}

var myFunc: IBingo = function(first: String, second: String, third: String): Array<String>{
    let newArr: Array<String> = [first, second, third];
    return newArr;
}

//Virker ikke???
var myFuncUpper: IBingo = function(first: String, second: String, third: String): Array<String>{
    let newArr: Array<String> = [first.toUpperCase, second.toUpperCase, third.toUpperCase];
    return newArr;
}

console.log(myFunc("hej", "med", "dig"));
console.log(myFuncUpper("hej", "med", "dig"));