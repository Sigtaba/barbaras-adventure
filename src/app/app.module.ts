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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EnterPlayerInfoComponent,
    PlayerScoreComponent
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
