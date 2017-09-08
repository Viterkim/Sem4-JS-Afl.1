var numbers = [2, 3, 67, 33];

var reducer = function(accum, e){
    if(!accum){
        accum = 0;
    }
    return accum + e;
}

var newArr = numbers.reduce(reducer);
console.log(newArr);