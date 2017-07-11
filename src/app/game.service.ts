import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Scenario } from './scenario.model';

@Injectable()
export class GameService {

  player: Player = null;

  scenarios: Scenario[] = [];

  constructor() { }

  getScenarioById(scenarioId: number){
    for (var i = 0; i < this.scenarios.length; i++) {
      if (this.scenarios[i].id === scenarioId) {
        return this.scenarios[i];
      }
    }
  }

  createPlayer(player) {
    this.player = player;
  }
}
