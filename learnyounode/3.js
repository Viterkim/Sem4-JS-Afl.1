var fs = require('fs');

var counter = fs.readFileSync(process.argv[2]).toString().split("\n").length -1;
console.log(counter);