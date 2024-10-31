// app.routes.ts
import { Routes } from '@angular/router';
import { DataDisplayComponent } from './components/data-display.component';
import { DATA_SERVICE_TOKEN } from './services/data.service.token';
import { DataServiceA } from './services/data.service.a';
import { DataServiceB } from './services/data.service.b';

export const routes: Routes = [
  {
    path: 'ruta-a',
    component: DataDisplayComponent,
    providers: [{ provide: DATA_SERVICE_TOKEN, useClass: DataServiceA }],
  },
  {
    path: 'ruta-b',
    component: DataDisplayComponent,
    providers: [{ provide: DATA_SERVICE_TOKEN, useClass: DataServiceB }],
  },
  {
    path: '',
    redirectTo: 'ruta-a',
    pathMatch: 'full',
  },
];
