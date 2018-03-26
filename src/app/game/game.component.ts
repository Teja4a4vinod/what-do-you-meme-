

import { Component, OnInit } from '@angular/core';
import {Game} from '../models/game';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Model=new Game();

  constructor() { }

  ngOnInit() {
  }

submitQuote(e: MouseEvent,text: string, PlayerName: string){
e.preventDefault();
this.Model.PlayedQuotes.push({Text: text,PlayerName: PlayerName, Chosen: false });
  }
}
