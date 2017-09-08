    var arr = ["Viktor", "Jonas", "William", "Chris", "Tom", "Bo"];

function myFilter(array, callback){
    var newArr = [];
    array.forEach(function(e){
        if(callback(e)){ //If the filter returns true | != returns undefined
            newArr.push(e);
        }
    });
    return newArr;
};

var filteredArr = myFilter(arr, function(e){
    if (e.length <= 3){
        return e;
    }
});
console.log(filteredArr);


function myMap(array, callback){
    var newArr = [];
    array.forEach(function(e){
        newArr.push(callback(e));
    });
    return newArr;
};

var mappedArr = myMap(arr, function(e){
    return e.toUpperCase();
});

console.log(mappedArr);
