var bingo = {name: 'Viktor', 
            birthday: 'Soon', 
            hobby: 'Guitar', 
            email: 'viterkim@bingo.dk'}

function out(){
    Object.keys(bingo).forEach(function(key){
        console.log(key, bingo[key]);
    });
}

out();
console.log("___")
delete bingo.hobby;

let statusOfProperty = bingo.hasOwnProperty("hobby");
console.log("Does bingo have hobby as a property? " + statusOfProperty);

