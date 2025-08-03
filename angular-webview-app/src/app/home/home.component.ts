import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="card">
      <h2>Welcome to the Home Page</h2>
      <p>This is an Angular application running inside an iOS WebView!</p>
      <div style="margin: 20px 0;">
        <p><strong>Features:</strong></p>
        <ul style="margin-left: 20px;">
          <li>Responsive design optimized for mobile</li>
          <li>Angular routing with multiple pages</li>
          <li>Modern UI components</li>
          <li>Optimized for WebView performance</li>
        </ul>
      </div>
      <button class="btn" (click)="showAlert()">Test iOS Integration</button>
    </div>
    
    <div class="card">
      <h3>App Information</h3>
      <p><strong>Framework:</strong> Angular 17</p>
      <p><strong>Platform:</strong> iOS WebView</p>
      <p><strong>Last Updated:</strong> {{ currentDate | date:'medium' }}</p>
    </div>
  `,
  styleUrls: []
})
export class HomeComponent {
  currentDate = new Date();
  
  showAlert() {
    alert('Hello from Angular in iOS WebView!');
  }
}