#!/bin/bash

# Neo Pixel Lab Deployment Script for Hostinger
echo "Starting Neo Pixel Lab deployment..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "npm not found. Please install npm."
    exit 1
fi

echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project for production..."
npm run build

# Copy built files to web root
echo "Deploying files..."
if [ -d "dist" ]; then
    cp -r dist/* ./
    echo "Files deployed successfully!"
    echo "Deployment completed at $(date)"
else
    echo "Build failed - dist directory not found"
    exit 1
fi

# Set proper permissions
chmod -R 755 .
find . -type f -name "*.html" -exec chmod 644 {} \;
find . -type f -name "*.css" -exec chmod 644 {} \;
find . -type f -name "*.js" -exec chmod 644 {} \;

echo "Deployment script completed successfully!"
