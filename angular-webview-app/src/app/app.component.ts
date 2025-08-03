import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="header">
      <h1>{{title}}</h1>
      <p>Welcome to our Angular WebView App!</p>
    </div>
    
    <nav class="nav">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'Angular WebView App';
}