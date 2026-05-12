#!/usr/bin/env sh
set -eu

SCRIPT_DIR=$(CDPATH= cd "$(dirname "$0")" && pwd)
cd "$SCRIPT_DIR"

PORT="${PORT:-3000}"
PID_FILE=".docs-server.pid"
LOG_FILE="docs-server.log"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm was not found. Install Node.js 18 or newer and try again." >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing documentation dependencies..."
  npm ci --cache .npm-cache --prefer-offline
fi

if [ -f "$PID_FILE" ]; then
  OLD_PID=$(cat "$PID_FILE" 2>/dev/null || true)
  if [ -n "${OLD_PID:-}" ] && kill -0 "$OLD_PID" 2>/dev/null; then
    echo "Stopping previous documentation server process $OLD_PID..."
    kill "$OLD_PID" 2>/dev/null || true
    sleep 1
    kill -9 "$OLD_PID" 2>/dev/null || true
  fi
  rm -f "$PID_FILE"
fi

echo "Stopping any documentation server on port $PORT..."
if command -v lsof >/dev/null 2>&1; then
  PIDS=$(lsof -ti "tcp:$PORT" 2>/dev/null || true)
  if [ -n "${PIDS:-}" ]; then
    kill $PIDS 2>/dev/null || true
    sleep 1
    kill -9 $PIDS 2>/dev/null || true
  fi
elif command -v fuser >/dev/null 2>&1; then
  fuser -k "${PORT}/tcp" >/dev/null 2>&1 || true
fi

echo "Rebuilding documentation..."
npm run build

echo "Starting documentation server on http://localhost:$PORT ..."
nohup npm run serve -- --host 0.0.0.0 --port "$PORT" >"$LOG_FILE" 2>&1 &
echo "$!" > "$PID_FILE"
echo "Server started with process $(cat "$PID_FILE"). Logs: $SCRIPT_DIR/$LOG_FILE"
