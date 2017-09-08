var fs = require("fs");
var myNumber = undefined;

function addOne(callback){
    fs.readFile('bin.txt', function(err, data){
        myNumber = parseInt(dxata);
        myNumber++;
        callback();
    })
}

function logNumber(){
    console.log(myNumber);
}

addOne(logNumber);
