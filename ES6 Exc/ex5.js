function f(...args) {
    let returnString = "";
    returnString += `Sum: ${args.length}`;
    for (let index = 0; index < args.length; index++) {
        returnString += `\nArg value ${index} is a ${args[index].constructor.name}`;
    }
    return returnString;
}

console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [...rest];
console.log(restParams);
console.log(f(5,2,...restParams));

var chars = [... f(5,2,...restParams)];