function bingo(){
    console.log(this);
};
// bingo(); <- Skriver vinduets properties ud, i en browser virker dette også.
bingo.call("85"); //Gør this argumentet om til det jeg passer ind


function bingo2(){
    let styg = arguments[1];
    console.log(this + styg);
};

bingo2.apply("86", "den stygge besked");