import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnterPlayerInfoComponent } from './enter-player-info/enter-player-info.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
