var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}
]

var reducer = function(accumulator, member, index, arr){
    var temp = accumulator + member.age;
    if(index === arr.length-1){ //At end of array
        return temp / arr.length;
    }
    return temp;
}
var initValue = 0;
var result = members.reduce(reducer, initValue);

console.log(result);