let fName = "Kurt";
let lName = "Wonnegut";
let age = 98;

function Maker(fName, lName, age){
    return { fName, lName, age};
}
var person = new Maker(fName, lName, age);
console.log(person);