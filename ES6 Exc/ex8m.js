function f(...args) {
    let returnString = "";
    returnString += `Sum: ${args.length}`;
    for (let index = 0; index < args.length; index++) {
        returnString += `\nArg value ${index} is a ${args[index].constructor.name}`;
    }
    return returnString;
}

export default {f};