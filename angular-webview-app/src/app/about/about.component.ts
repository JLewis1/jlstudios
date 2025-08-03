import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="card">
      <h2>About This App</h2>
      <p>This Angular application demonstrates how to create a web app that can be embedded in an iOS WebView.</p>
      
      <h3>Technical Details</h3>
      <ul style="margin: 20px;">
        <li><strong>Frontend Framework:</strong> Angular 17</li>
        <li><strong>Styling:</strong> CSS3 with modern design</li>
        <li><strong>Routing:</strong> Angular Router for navigation</li>
        <li><strong>Build Tool:</strong> Angular CLI</li>
        <li><strong>Mobile Support:</strong> Responsive design principles</li>
      </ul>
      
      <h3>iOS Integration Features</h3>
      <ul style="margin: 20px;">
        <li>WKWebView compatible</li>
        <li>Touch-friendly interface</li>
        <li>Optimized loading performance</li>
        <li>Native app-like experience</li>
      </ul>
    </div>
    
    <div class="card">
      <h3>Development Info</h3>
      <p>Built with modern web standards and best practices for mobile web applications.</p>
      <button class="btn" (click)="navigateToContact()">Get in Touch</button>
    </div>
  `,
  styleUrls: []
})
export class AboutComponent {
  navigateToContact() {
    // In a real app, you might use Router.navigate()
    window.location.href = '#/contact';
  }
}