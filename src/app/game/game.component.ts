import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me: User;
    Dealer:string;
    private _api = "http://localhost:8080/game";

  constructor(private http: Http) {
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  flipPicture(e: MouseEvent){
    if(this.IAmTheDealer()){
    this.http.post(this._api + "/picture",{})
        .subscribe();
  }
  }
  
  submitQuote(e: MouseEvent, text: string){
    if(this.IAmTheDealer()){
      e.preventDefault();
    }

    if(this.MyPlayedQuote()) return;

    this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
        .subscribe(data=> {
            if(data.json().success){
                this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
            }
        });
  }

    login(name: string){
    this.http.get(this._api + "/quotes", { params : { playerId: name } })
    .subscribe(data=> this.Me =  {Name: name,MyQuotes: data.json() } )  
    }
    DealerIsEmpty(){
      if(this.Model.DealerId == null){
          this.Model.DealerId=this.Me.Name;
          return true;
      }
      else{
        return false;
      }
    }
  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
 
}