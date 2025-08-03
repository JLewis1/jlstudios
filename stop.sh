#!/bin/bash

echo "🛑 Stopping iOS WebView Angular App servers"
echo "==========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Stop Angular server
if [ -f "angular-server.pid" ]; then
    ANGULAR_PID=$(cat angular-server.pid)
    if ps -p $ANGULAR_PID > /dev/null 2>&1; then
        print_status "Stopping Angular server (PID: $ANGULAR_PID)..."
        kill $ANGULAR_PID
        rm angular-server.pid
    else
        print_warning "Angular server was not running"
        rm angular-server.pid
    fi
else
    print_warning "No Angular server PID file found"
fi

# Stop test server
if [ -f "test-server.pid" ]; then
    TEST_PID=$(cat test-server.pid)
    if ps -p $TEST_PID > /dev/null 2>&1; then
        print_status "Stopping test server (PID: $TEST_PID)..."
        kill $TEST_PID
        rm test-server.pid
    else
        print_warning "Test server was not running"
        rm test-server.pid
    fi
else
    print_warning "No test server PID file found"
fi

# Kill any remaining Node.js processes that might be running Angular
print_status "Checking for any remaining Angular processes..."
NODE_PROCESSES=$(ps aux | grep "ng serve\|node.*angular" | grep -v grep | awk '{print $2}')
if [ ! -z "$NODE_PROCESSES" ]; then
    print_status "Stopping remaining Angular processes..."
    echo $NODE_PROCESSES | xargs kill 2>/dev/null
fi

# Kill any remaining Python HTTP servers on port 8080
print_status "Checking for any remaining Python HTTP servers..."
PYTHON_PROCESSES=$(ps aux | grep "python.*http.server.*8080" | grep -v grep | awk '{print $2}')
if [ ! -z "$PYTHON_PROCESSES" ]; then
    print_status "Stopping remaining Python HTTP servers..."
    echo $PYTHON_PROCESSES | xargs kill 2>/dev/null
fi

# Clean up log files
if [ -f "angular-server.log" ]; then
    print_status "Archiving Angular server log..."
    mv angular-server.log "angular-server-$(date +%Y%m%d-%H%M%S).log"
fi

if [ -f "test-server.log" ]; then
    print_status "Archiving test server log..."
    mv test-server.log "test-server-$(date +%Y%m%d-%H%M%S).log"
fi

print_status "All servers stopped successfully!"
echo ""
print_status "To restart, run: ./setup.sh"