var fs = require('fs');
fs.createReadStream('sutmig.txt').pipe(fs.createWriteStream('ny.txt'));
console.log("Done");