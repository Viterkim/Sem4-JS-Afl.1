var arr = ["Viktor", "Jonas", "William", "Chris", "Tom", "Bo"];

console.log("\nNormal:");
console.log(arr);

var newArr = arr.filter(function(e){
    if(e.length <= 3){
        return e;
    }
});

console.log("\nFilter:");
console.log(newArr);

var newArr2 = arr.map(function(e){
    return e.toUpperCase();
});

console.log("\nMap:");
console.log(newArr2);