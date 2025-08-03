import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="card">
      <h2>Contact Information</h2>
      <p>This page demonstrates form handling and user interaction in the WebView environment.</p>
      
      <div style="margin: 20px 0;">
        <h3>Contact Details</h3>
        <p><strong>App Name:</strong> Angular WebView Demo</p>
        <p><strong>Version:</strong> 1.0.0</p>
        <p><strong>Platform:</strong> iOS + Angular</p>
      </div>
      
      <div style="margin: 20px 0;">
        <h3>Quick Actions</h3>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn" (click)="testLocalStorage()">Test Local Storage</button>
          <button class="btn" (click)="testDeviceInfo()">Device Info</button>
          <button class="btn" (click)="testPerformance()">Performance Test</button>
        </div>
      </div>
      
      <div *ngIf="testResults" class="card" style="background-color: #e8f5e8; margin-top: 20px;">
        <h4>Test Results:</h4>
        <pre>{{ testResults }}</pre>
      </div>
    </div>
  `,
  styleUrls: []
})
export class ContactComponent {
  testResults: string = '';
  
  testLocalStorage() {
    try {
      localStorage.setItem('test', 'WebView Storage Test');
      const result = localStorage.getItem('test');
      this.testResults = `Local Storage: ${result ? 'Working ✓' : 'Failed ✗'}`;
    } catch (error) {
      this.testResults = `Local Storage Error: ${error}`;
    }
  }
  
  testDeviceInfo() {
    this.testResults = `User Agent: ${navigator.userAgent}\n` +
                      `Platform: ${navigator.platform}\n` +
                      `Screen: ${screen.width}x${screen.height}\n` +
                      `Viewport: ${window.innerWidth}x${window.innerHeight}`;
  }
  
  testPerformance() {
    const start = performance.now();
    // Simple performance test
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    const end = performance.now();
    this.testResults = `Performance Test: ${(end - start).toFixed(2)}ms\nResult: ${sum}`;
  }
}