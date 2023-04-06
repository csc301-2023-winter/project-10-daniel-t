#!/bin/bash

# Change directory to 'backend' and install requirements
cd backend || exit
pip install -r requirements.txt

# Start the Flask app using nohup
nohup python3 app.py &

# Change back to the home directory
cd ..

# Change directory to 'my-app' and install dependencies
cd my-app || exit
npm install

# Build the React app
npm run build

# Navigate to the 'build' directory
cd build || exit

# configure the build folder
mkdir search
mv * search
npx serve &

