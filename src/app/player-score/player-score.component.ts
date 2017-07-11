import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit {

  constructor(public GameService: GameService) { }

  ngOnInit() {
  }

}
