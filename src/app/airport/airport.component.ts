import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  constructor(private GameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  navigate(id) {
    this.router.navigate(['scenario', id]);
  }

  checkQualification(scenario) {
    if (this.GameService.player.points >= scenario.pointsRequired) {
      return true;
    } else {
      return false;
    }
  }
}
