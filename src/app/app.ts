// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <h1>Simple Math Router App</h1>
    <nav>
      <a routerLink="/sum">Sum</a> |
      <a routerLink="/product">Product</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
