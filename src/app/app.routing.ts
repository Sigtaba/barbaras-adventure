import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnterPlayerInfoComponent } from './enter-player-info/enter-player-info.component';
import { WinScreenComponent } from './win-screen/win-screen.component';
import { LoseScreenComponent } from './lose-screen/lose-screen.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { AirportComponent } from './airport/airport.component';

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
    component: ScenarioComponent
  },
  {
    path: 'win-screen',
    component: WinScreenComponent
  },
  {
    path: 'lose-screen',
    component: LoseScreenComponent
  },
  {
    path: 'airport',
    component: AirportComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
