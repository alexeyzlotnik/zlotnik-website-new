#!/bin/sh

# Remove local changes
git checkout -- .

# update source code
git pull

npm install
npm run build