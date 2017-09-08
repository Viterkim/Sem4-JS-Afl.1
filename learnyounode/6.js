var myModule = require('./6module');

var callback = function(err, list){
    if(err){
        throw err;
    }
    list.forEach(function(e){
        console.log(e);
    })
}
myModule(process.argv[2], process.argv[3], callback);