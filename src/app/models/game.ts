export class Game {

    Players: User[] = [
        { Name: 'Tejaswini', MyQuotes: [] },
        { Name: 'Donald Trump', MyQuotes: [] },
        { Name: 'Barak Obama', MyQuotes: [] },        
    ];
    Dealer: string = "Tejaswini";
    Picture:{
            url: string;
    };
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: 'Donald Trump', Chosen: false }
    ];
}

export class User {
    Name: string;
    MyQuotes: string[];
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}