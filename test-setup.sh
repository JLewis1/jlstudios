#!/bin/bash

echo "🧪 Testing iOS WebView Angular App Setup"
echo "======================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[⚠]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_test() {
    echo -e "${BLUE}[TEST]${NC} $1"
}

TOTAL_TESTS=0
PASSED_TESTS=0

run_test() {
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    print_test "$1"
    
    if eval "$2"; then
        print_status "$3"
        PASSED_TESTS=$((PASSED_TESTS + 1))
        return 0
    else
        print_error "$4"
        return 1
    fi
}

echo ""
print_test "Running comprehensive tests..."
echo ""

# Test 1: Check if Angular project exists
run_test "Angular project structure" \
    "[ -d 'angular-webview-app' ] && [ -f 'angular-webview-app/package.json' ] && [ -f 'angular-webview-app/angular.json' ]" \
    "Angular project structure is complete" \
    "Angular project files are missing"

# Test 2: Check Angular dependencies
run_test "Angular dependencies" \
    "[ -d 'angular-webview-app/node_modules' ] && [ -f 'angular-webview-app/node_modules/@angular/core/package.json' ]" \
    "Angular dependencies are installed" \
    "Angular dependencies are missing - run 'npm install' in angular-webview-app/"

# Test 3: Check Angular components
run_test "Angular components" \
    "[ -f 'angular-webview-app/src/app/home/home.component.ts' ] && [ -f 'angular-webview-app/src/app/about/about.component.ts' ] && [ -f 'angular-webview-app/src/app/contact/contact.component.ts' ]" \
    "All Angular components are present" \
    "Some Angular components are missing"

# Test 4: Check iOS project structure
run_test "iOS project structure" \
    "[ -d 'ios-webview-app' ] && [ -f 'ios-webview-app/AngularWebViewApp.xcodeproj/project.pbxproj' ]" \
    "iOS Xcode project is complete" \
    "iOS project files are missing"

# Test 5: Check iOS source files
run_test "iOS source files" \
    "[ -f 'ios-webview-app/AngularWebViewApp/ViewController.swift' ] && [ -f 'ios-webview-app/AngularWebViewApp/AppDelegate.swift' ] && [ -f 'ios-webview-app/AngularWebViewApp/Info.plist' ]" \
    "All iOS source files are present" \
    "Some iOS source files are missing"

# Test 6: Check test page
run_test "Test WebView page" \
    "[ -f 'test-webview.html' ]" \
    "Test WebView page exists" \
    "Test WebView page is missing"

# Test 7: Check scripts
run_test "Setup scripts" \
    "[ -f 'setup.sh' ] && [ -f 'stop.sh' ] && [ -x 'setup.sh' ] && [ -x 'stop.sh' ]" \
    "Setup and stop scripts are ready" \
    "Setup scripts are missing or not executable"

# Test 8: Check if test server is running
run_test "Test HTTP server" \
    "curl -s -f http://localhost:8080/test-webview.html > /dev/null" \
    "Test HTTP server is running and serving content" \
    "Test HTTP server is not responding"

# Test 9: Check Node.js and npm
run_test "Node.js environment" \
    "command -v node > /dev/null && command -v npm > /dev/null" \
    "Node.js and npm are available" \
    "Node.js or npm is not installed"

# Test 10: Check if Angular server is accessible (optional)
if curl -s http://localhost:4200 > /dev/null 2>&1; then
    run_test "Angular development server" \
        "curl -s -f http://localhost:4200 > /dev/null" \
        "Angular development server is running" \
        "Angular development server is not responding"
else
    print_warning "Angular server is not running (this is optional for testing)"
fi

echo ""
echo "======================================"
echo "Test Results: $PASSED_TESTS/$TOTAL_TESTS tests passed"

if [ $PASSED_TESTS -eq $TOTAL_TESTS ]; then
    print_status "All tests passed! ✨"
    echo ""
    print_status "Ready for iOS testing:"
    echo "  1. Open ios-webview-app/AngularWebViewApp.xcodeproj in Xcode"
    echo "  2. Build and run in iOS Simulator"
    echo "  3. The app should load: http://localhost:8080/test-webview.html"
    echo ""
    print_status "For full Angular testing:"
    echo "  1. Run './setup.sh' to start both servers"
    echo "  2. Wait for Angular build to complete"
    echo "  3. Update ViewController.swift to use http://localhost:4200"
    echo "  4. Rebuild iOS app"
else
    print_error "Some tests failed. Please check the issues above."
fi

echo ""