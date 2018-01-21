import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListaGamesComponent } from './games/lista-games/lista-games.component';

export const rootRouterConfig: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'games', component: ListaGamesComponent },
];