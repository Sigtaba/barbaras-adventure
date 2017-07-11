import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Scenario } from './scenario.model';
import { Answer } from './answer.model';

@Injectable()
export class GameService {

  player: Player = null;

  scenarios: Scenario[] = [];

  constructor() { }


  createPlayer(player) {
    this.player = player;
  }
}
