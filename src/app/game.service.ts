import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class GameService {

  player: Player = null;

  constructor() { }


  test(player) {
    this.player = player;
  }
}
