import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { EnterPlayerInfoComponent } from './enter-player-info/enter-player-info.component';
import { PlayerScoreComponent } from './player-score/player-score.component';

import { GameService } from './game.service';
import { WinScreenComponent } from './win-screen/win-screen.component';
import { LoseScreenComponent } from './lose-screen/lose-screen.component';
import { ScenarioComponent } from './scenario/scenario.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EnterPlayerInfoComponent,
    PlayerScoreComponent,
    WinScreenComponent,
    LoseScreenComponent,
    ScenarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
