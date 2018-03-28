
export class Game {
    MyQuotes: string[] = ["Great Minds think alikebut...","Life is beautiful","Nothing is impossible"];
    Players: User[] = [ { Name: 'Tejaswini' }];
    Picture: string = 'http://f8rentals.com/wp-content/uploads/2015/03/IMG_0067ft.jpg?189db0';
    PlayedQuotes: Quote[] = [];
}

export class User {
    Name: string;
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}