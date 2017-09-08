var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        console.log(data);
    }) //Asynkront, hver gang data kommer ind sker der x
})