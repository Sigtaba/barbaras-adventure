import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnterPlayerInfoComponent } from './enter-player-info/enter-player-info.component';
import { WinScreenComponent } from './win-screen/win-screen.component';
import { LoseScreenComponent } from './lose-screen/lose-screen.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'enter-player-info',
    component: EnterPlayerInfoComponent
  },
  {
    path: 'scenario/:id',
    component: WelcomeComponent
  },
  {
    path: 'win-screen',
    component: WinScreenComponent
  },
  {
    path: 'lose-screen',
    component: LoseScreenComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
