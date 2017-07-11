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
    this.GameService.scenarios.push(
      new Scenario('Unknown Soldier - Jonathan',
                   'I am Jonathan, a very good boy, and descendant of the almighty, the stupendous, the original Triangle herself, the Goddess Barbara. In order to receive my blessing, you must answer the following riddle:',
                   'What is Barbara\'s favorite type of dog?',
                   new Answer('Pug', -5),
                   new Answer('Shiba Inu', 0),
                   new Answer('Great Dane', 5),
                   '/src/assets/img/Unknown Solider Egypt.jpg',
                   0,
                   1));
    this.GameService.scenarios.push(
      new Scenario('Pink Triangle - Denise',
                   'Hay bishes. I\'m a saucy pink triangle who don\'t need no triangular-man!',
                   'When Barbara is throwing down, what genre of music does she angle out to?',
                   new Answer('Electronic', -5),
                   new Answer('Children\'s music', 5),
                   new Answer('South African Rage Rap', 0),
                   '/src/assets/img/pink triangle spain.jpg',
                   5,
                   2));
    this.GameService.scenarios.push(
      new Scenario('Dhaka - Asif',
                    'I AM NO LONGER FRIENDS WITH MUDASIR!',
                    'WHO IS MY NEW BEST FRIEND?!?!?!?!',
                    new Answer('Singh', -5),
                    new Answer('Salman', 5),
                    new Answer('Dev', 0),
                    '/src/assets/img/dhaka bangladesh.jpg',
                    10,
                    3));
    this.GameService.scenarios.push(
      new Scenario('Ryugyong Hotel - Xi',
                    'WE\'RE GONNA NUKE EVERYTHING!',
                    'Who is the best golfer in the world?',
                    new Answer('Barbara', -20),
                    new Answer('Kim Jong Il', 20),
                    new Answer('Il', -20),
                    '/src/assets/img/ryugyong hotel north korea.jpg',
                    15,
                    4));
    this.GameService.scenarios.push(
      new Scenario('The Arch - Ronald',
                    'Hello.  My mother had sexual relations with a circle.  I turned out a little curvy.  Please excuse my inferior angles.',
                    'Where does Barbara go to get her angles sharpened?',
                    new Answer('A butcher shop', -5),
                    new Answer('Lumber Mill', 0),
                    new Answer('Veterinarian', 5),
                    '/src/assets/img/stl arch.jpg',
                    15,
                    5));
    this.GameService.scenarios.push(
      new Scenario('Luxor - Leonard',
                    'I just love showtunes!!!',
                    'What\'s my favorite song?',
                    new Answer('Send in the Clowns', 5),
                    new Answer('Hit Me Baby One More Time', -5),
                    new Answer('Danke Schoen', 0),
                    '/src/assets/img/luxor las vegas.tif',
                    20,
                    6));
    this.GameService.scenarios.push(
      new Scenario('Chichen Itza - Lucinda',
                    '😐',
                    '😑',
                    new Answer('◮', -5),
                    new Answer('⟁', 0),
                    new Answer('▶', 5),
                    '/src/assets/img/Mayan Chichen Itza.jpg',
                    25,
                    7));
    this.GameService.scenarios.push(
      new Scenario('Louvre - Penelope',
                    'Salut mon pote. Aller au café et boire du café et des crêpes.',
                    'D\'où est venue la belle écharpe de Barbara?',
                    new Answer('Il existe parce qu\'il le fait', -5),
                    new Answer('Une cigogne l\'a laissé tomber du ciel', 0),
                    new Answer('Vieille rampante', 5),
                    '/src/assets/img/louvre paris.jpg',
                    30,
                    8));
    this.GameService.scenarios.push(
      new Scenario('Giza - Winston',
                    '<(^_^<) <(^_^)> (>^_^)>',
                    'What animal is the protector of the Goddess Barbara?',
                    new Answer('@(*O*)@', -5),
                    new Answer('><((((\'>', 0),
                    new Answer('(")(=^.^=)(")', 5),
                    '/src/assets/img/The-Giza-Plateau.jpg',
                    35,
                    9));
  }
}
