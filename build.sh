#!/bin/bash

set -e

eval $(minikube docker-env)

echo "🔧 Building api image..."
docker build -t ethans333/xfinder-api:latest backend/

echo "🔧 Building frontend image..."
docker build -t ethans333/xfinder-frontend:latest frontend/

echo "✅ All images built successfully."