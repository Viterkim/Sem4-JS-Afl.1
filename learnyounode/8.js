var http = require('http');
var url = process.argv[2];

var completeString = "";

http.get(url, function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        completeString += data;
    }) //Asynkront, hver gang data kommer ind sker der x
    response.on("end", function(){
        console.log(completeString.length);
        console.log(completeString);
    })
})
