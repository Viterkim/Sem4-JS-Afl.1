interface IBook{
    title: string;
    published?: string; //optional
    readonly author: string;
    pages: number;
}

//Java way etc ??
// class Book implements IBook{
//     constructor(title: string, published: string, author: string, pages: number){
//         this.title = title;
//     }
// }

var denStyggeBog: IBook = {
    title: "Bingo bogen",
    //published: "1968-11-16T00:00:00",
    author: "Viktorkim",
    pages: 85
};

function tester(book: IBook): void{
    //book.author = "new author"; Readonly!
    console.log(book.title);
}

tester(denStyggeBog);

//Ducktyping er hvor den type checker ved runtime, om forskellige typer stemmer overens