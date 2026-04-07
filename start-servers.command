#!/bin/bash
# Kill anything already on these ports
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:1337 | xargs kill -9 2>/dev/null
sleep 2

# Start blog servers
cd "$(dirname "$0")"

echo "Starting Strapi backend..."
cd backend && npm run develop > /tmp/strapi.log 2>&1 &
STRAPI_PID=$!
echo "Strapi PID: $STRAPI_PID"

echo "Waiting 25 seconds for Strapi to boot..."
sleep 25

echo "Starting Next.js frontend..."
cd ../frontend && npm run dev > /tmp/nextjs.log 2>&1 &
NEXTJS_PID=$!
echo "Next.js PID: $NEXTJS_PID"

echo "Both servers started! Strapi: $STRAPI_PID, Next.js: $NEXTJS_PID"
echo "Visit http://localhost:3000 for the blog"
echo "Visit http://localhost:1337/admin for Strapi admin"
