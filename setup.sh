#!/bin/bash

echo "🚀 Setting up iOS WebView Angular App"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "\n${BLUE}=== $1 ===${NC}"
}

# Check if Node.js is installed
print_header "Checking Prerequisites"
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Setup Angular app
print_header "Setting up Angular Application"
cd angular-webview-app

if [ ! -d "node_modules" ]; then
    print_status "Installing Angular dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        print_error "Failed to install Angular dependencies"
        exit 1
    fi
else
    print_status "Angular dependencies already installed"
fi

# Start Angular development server in background
print_status "Starting Angular development server..."
npm start > ../angular-server.log 2>&1 &
ANGULAR_PID=$!
echo $ANGULAR_PID > ../angular-server.pid

# Wait for Angular server to start
print_status "Waiting for Angular server to start..."
for i in {1..30}; do
    if curl -s http://localhost:4200 > /dev/null 2>&1; then
        print_status "Angular server is running on http://localhost:4200"
        break
    fi
    sleep 1
    if [ $i -eq 30 ]; then
        print_warning "Angular server might not be ready yet. Check angular-server.log for details."
    fi
done

cd ..

# Start simple HTTP server for testing
print_header "Starting Test Server"
print_status "Starting Python HTTP server for testing..."
python3 -m http.server 8080 > test-server.log 2>&1 &
TEST_PID=$!
echo $TEST_PID > test-server.pid

# Wait for test server to start
sleep 2
if curl -s http://localhost:8080/test-webview.html > /dev/null 2>&1; then
    print_status "Test server is running on http://localhost:8080"
else
    print_warning "Test server might not be ready yet."
fi

print_header "Setup Complete!"
echo ""
print_status "Servers are now running:"
echo "  📱 Test WebView page: http://localhost:8080/test-webview.html"
echo "  🅰️  Angular app: http://localhost:4200 (may take a moment to build)"
echo ""
print_status "iOS App Configuration:"
echo "  1. Open ios-webview-app/AngularWebViewApp.xcodeproj in Xcode"
echo "  2. Build and run the project in iOS Simulator"
echo "  3. The app should load the test page automatically"
echo ""
print_status "For Angular app testing:"
echo "  1. Wait for Angular build to complete (check angular-server.log)"
echo "  2. Update ViewController.swift to use http://localhost:4200"
echo "  3. Rebuild and run the iOS app"
echo ""
print_warning "To stop servers, run: ./stop.sh"
echo ""
print_status "Log files:"
echo "  • Angular server: angular-server.log"
echo "  • Test server: test-server.log"