import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { GameService } from './game.service';
import { Scenario } from './scenario.model';
import { Answer } from './answer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  player: Player = null;

  constructor(public GameService: GameService){}

  ngOnInit() {
    this.GameService.scenarios.push(new Scenario('name', 'stuff', 'stuff', new Answer('fsad', 2), new Answer('fsad', 2), new Answer('fsad', 2), 3));
  }
}
