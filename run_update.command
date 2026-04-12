#!/bin/bash
LOGFILE=~/Desktop/maurospadaro/update_log.txt
echo "" > "$LOGFILE"

echo "=== GIT PULL ===" | tee -a "$LOGFILE"
cd ~/Desktop/maurospadaro

# Use HTTPS instead of SSH to avoid passphrase prompt
GIT_OUTPUT=$(git pull https://github.com/mauro-spadaro/speaktheproductup.git main 2>&1)
echo "$GIT_OUTPUT" | tee -a "$LOGFILE"

# Check if there were any changes
if echo "$GIT_OUTPUT" | grep -q "Already up to date"; then
  echo "=== NO CHANGES ===" | tee -a "$LOGFILE"
else
  echo "=== CHANGES DETECTED ===" | tee -a "$LOGFILE"
fi

echo "=== KILLING PORT 3000 ===" | tee -a "$LOGFILE"
lsof -ti:3000 | xargs kill -9 2>/dev/null && echo "Killed process on port 3000" | tee -a "$LOGFILE" || echo "No process on port 3000" | tee -a "$LOGFILE"

echo "=== STARTING NEXT.JS ===" | tee -a "$LOGFILE"
cd ~/Desktop/maurospadaro/frontend
npm run dev >> "$LOGFILE" 2>&1 &
echo "Started Next.js (PID: $!)" | tee -a "$LOGFILE"

echo "Waiting 15 seconds for server startup..." | tee -a "$LOGFILE"
sleep 15
echo "=== DONE ===" | tee -a "$LOGFILE"
