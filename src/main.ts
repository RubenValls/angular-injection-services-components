// main.ts
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <button [routerLink]="['/ruta-a']">Ir a Ruta A</button>
    <button [routerLink]="['/ruta-b']">Ir a Ruta B</button>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
});
