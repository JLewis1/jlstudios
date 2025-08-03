# iOS WebView Angular App

This project demonstrates how to create an iOS application that displays an Angular web application inside a WKWebView. The project consists of two main components:

1. **Angular Web Application** - A modern Angular app with routing and multiple pages
2. **iOS Application** - A native iOS app that displays the Angular app in a WebView

## Project Structure

```
.
├── angular-webview-app/          # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── home/            # Home component
│   │   │   ├── about/           # About component
│   │   │   ├── contact/         # Contact component
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── ios-webview-app/              # iOS application
│   ├── AngularWebViewApp.xcodeproj/
│   ├── AngularWebViewApp/
│   │   ├── AppDelegate.swift
│   │   ├── SceneDelegate.swift
│   │   ├── ViewController.swift  # Main WebView controller
│   │   ├── Info.plist
│   │   ├── Assets.xcassets/
│   │   └── Base.lproj/
│   └── AngularWebViewApp.xcworkspace/
│
└── README.md
```

## Features

### Angular App Features
- ✅ Responsive design optimized for mobile
- ✅ Angular routing with multiple pages (Home, About, Contact)
- ✅ Modern UI with custom CSS styling
- ✅ Interactive components with event handling
- ✅ Device information and performance testing tools
- ✅ Local storage testing capabilities

### iOS App Features
- ✅ WKWebView integration for optimal performance
- ✅ Navigation controls (back, forward, refresh)
- ✅ Loading progress indicator
- ✅ Error handling with retry functionality
- ✅ JavaScript alert/confirm dialog support
- ✅ Network security configuration for localhost
- ✅ Auto Layout and responsive design
- ✅ Scene-based architecture (iOS 13+)

## Prerequisites

- **For Angular Development:**
  - Node.js 18+ and npm
  - Angular CLI (`npm install -g @angular/cli`)

- **For iOS Development:**
  - macOS with Xcode 14+
  - iOS 17.0+ SDK
  - iOS Simulator or physical device

## Getting Started

### 1. Run the Angular Application

```bash
# Navigate to the Angular app directory
cd angular-webview-app

# Install dependencies
npm install

# Start the development server
npm start
```

The Angular app will be available at `http://localhost:4200`

### 2. Open the iOS Application

```bash
# Navigate to the iOS app directory
cd ios-webview-app

# Open the Xcode project
open AngularWebViewApp.xcodeproj
```

### 3. Configure the iOS App

1. Open `ViewController.swift`
2. Update the `angularAppURL` constant if needed:
   ```swift
   private let angularAppURL = "http://localhost:4200"
   ```
3. Build and run the iOS app in Xcode

## Testing

### Angular App Testing

1. Open http://localhost:4200 in your browser
2. Navigate between pages using the navigation menu
3. Test interactive features on the Contact page:
   - Local Storage test
   - Device Info display
   - Performance test

### iOS App Testing

1. Start the Angular development server
2. Build and run the iOS app in Xcode
3. The app should load the Angular app automatically
4. Test the following features:
   - Navigation between Angular routes
   - Back/Forward buttons in iOS navigation bar
   - Refresh functionality
   - Error handling (stop Angular server and try refreshing)
   - JavaScript alerts (click "Test iOS Integration" button)

## Configuration

### Network Security

The iOS app includes `NSAppTransportSecurity` settings in `Info.plist` to allow HTTP connections to localhost:

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```

### Deployment Considerations

For production deployment:

1. **Angular App**: Build for production and deploy to a web server
   ```bash
   npm run build
   ```

2. **iOS App**: Update the `angularAppURL` to your production URL and configure appropriate security settings

## Troubleshooting

### Common Issues

1. **Angular app not loading in iOS WebView**
   - Ensure Angular dev server is running on `http://localhost:4200`
   - Check iOS Simulator's network connectivity
   - Verify `NSAppTransportSecurity` settings in Info.plist

2. **Build errors in Angular**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors in the console

3. **iOS app build errors**
   - Ensure you're using Xcode 14+ with iOS 17.0+ SDK
   - Clean and rebuild the project (⌘+Shift+K, then ⌘+B)

### Performance Tips

1. **For Angular**: Use `--configuration production` for optimized builds
2. **For iOS**: Enable WKWebView optimizations and consider implementing caching strategies

## Architecture

### Angular Architecture
- **Modular Design**: Components are organized by feature
- **Routing**: Angular Router for single-page navigation
- **Services**: Could be extended with HTTP services for API calls
- **Responsive CSS**: Mobile-first design approach

### iOS Architecture
- **Scene-based**: Uses `SceneDelegate` for iOS 13+ compatibility
- **Delegation Pattern**: `WKNavigationDelegate` and `WKUIDelegate` for WebView control
- **KVO**: Key-Value Observing for progress monitoring
- **Auto Layout**: Programmatic constraints for responsive design

## Next Steps

1. **Add native iOS features**: Camera, GPS, Push notifications
2. **Implement JavaScript bridges**: Two-way communication between Angular and iOS
3. **Add offline support**: Cache Angular app for offline usage
4. **Performance optimization**: Implement WebView caching and preloading
5. **Security enhancements**: Implement certificate pinning and CSP headers

## License

This project is created for demonstration purposes. Feel free to use and modify as needed.

---

**Note**: This project demonstrates the integration between Angular and iOS WebView. In a production environment, consider using frameworks like Capacitor or Cordova for more robust hybrid app development.