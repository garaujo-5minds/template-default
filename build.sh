#!/usr/bin/env sh

greenBold='\x1B[1;32m'
endColor='\x1B[0m'

#
echo "Build main"
npm install
npm run build
