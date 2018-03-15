

export class Game {
    MyQuotes:string[]=["Great Minds think alikebut...","Life is beautiful","Nothing is impossible"];
    Palyers:User[]=[];
    Picture:string='http://f8rentals.com/wp-content/uploads/2015/03/IMG_0067ft.jpg?189db0';
    PlayedMyQuotes:Quote;

};

export class User {
    Name:string;
};
export class Quote {
 Text:string;
 PlayerName:string;
 Chosen:boolean=false;
}