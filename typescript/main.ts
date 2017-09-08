function genericFunc<T>(argument: T): T[]{
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);