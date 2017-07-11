import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../player.model';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-player-info',
  templateUrl: './enter-player-info.component.html',
  styleUrls: ['./enter-player-info.component.css']
})
export class EnterPlayerInfoComponent implements OnInit {
notATriangle: boolean = false;

  constructor(private GameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  createPlayer(form: NgForm) {
    var testValue = this.testTriangle(form.value.side1, form.value.side2, form.value.side3)
    console.log(testValue);
    if (testValue != false) {
      var newPlayer = new Player(form.value.name, testValue);
      this.GameService.createPlayer(newPlayer);
      this.router.navigate(['scenario', 1])
      console.log(this.GameService.scenarios);
    }
  }

  testTriangle(n1, n2, n3) {
    if (n1 <= 0 || n2 <= 0 || n3 <= 0) {
      this.notATriangle = true;
      return false;
    } else if ((n1 + n2 <= n3) || (n1 + n3 <= n2) || (n2 + n3 <= n1)) {
      this.notATriangle = true;
      return false;
    } else if ((n1 === n2) && (n1 === n3)) {
      return 'equilateral';
    } else if ((n1 === n2) || (n2 === n3) || (n1 === n3)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}
