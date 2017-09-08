var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list){
    list.forEach(function(e){
        if(path.extname(e) === '.' + ext){ //Hvis file extensionen + . + det ønskede navn passer
            console.log(e);
        }
    })
});
