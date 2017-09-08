var arr = ["Viktor", "Jonas", "William", "Chris", "Tom", "Bo"];

var newArr = arr.map(function(e){
    return "<li>" + e + "</li>";
});

let str = "<ul>" + newArr.join("") + "</ul>"; //Splits with nothing GG

console.log(str);
