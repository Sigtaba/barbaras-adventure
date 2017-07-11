import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import { Scenario } from '../scenario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})

export class ScenarioComponent implements OnInit {
  scenarioId: number;
  scenarioToDisplay: Scenario = null;
  wrongAnswer: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.scenarioId = parseInt(urlParameters['id']);
    });
    this.scenarioToDisplay = this.gameService.getScenarioById(this.scenarioId);
  }

  checkResult(form: NgForm) {
    var data = parseInt(form.value.answer);
    this.gameService.player.points += data;
    if (data <= 0) {
      this.checkWin(this.gameService.player.points);
      this.wrongAnswer = true;
    } else {
      if (!this.checkWin(this.gameService.player.points)) {
        this.router.navigate(['airport']);
      }
    }
  }

  checkWin(points) {
    if (points < 0) {
      this.router.navigate(['lose-screen']);
      return true;
    }
    if (points >= 40) {
      this.router.navigate(['win-screen']);
      return true;
    }
    return false;
  }

}
