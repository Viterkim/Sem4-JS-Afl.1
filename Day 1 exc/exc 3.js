var arr = ["Viktor", "Jonas", "William", "Chris", "Tom", "Bo"];

function myFilter(callback){
    var newArr = [];
    for(i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArr.push(this[i]);
        }
    };
    return newArr;
};

function myMap(callback){
    var newArr = [];
    for(i = 0; i < this.length; i++){
        newArr.push(callback(this[i])); //Performs the function on every element
    };
    return newArr;
};

Array.prototype.myFilter = myFilter; //Adds the function to the prototype
Array.prototype.myMap = myMap; //Adds the function to the prototype

var newArr = arr.myFilter(function(e){
    if (e.length <= 3){
        return e;
    }
});

var newArr2 = arr.myMap(function(e){
    return e.toUpperCase();
});
console.log(newArr);
console.log(newArr2);