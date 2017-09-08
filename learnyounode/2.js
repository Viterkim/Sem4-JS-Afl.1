var sum = 0;

process.argv.slice(2).forEach(function(e){
    sum += Number(e);
});
console.log(sum);
