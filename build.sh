#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Installing frontend dependencies..."
yarn install

echo "Building frontend assets..."
yarn build

echo "Installing PHP dependencies for production..."
composer install --no-dev --no-interaction --optimize-autoloader

echo "Caching Laravel configuration, routes, and views..."
# php artisan config:cache
# php artisan route:cache
# php artisan view:cache

echo "Creating deployment tarball..."
tar -cvf ./deploy.tar \
	--exclude='*.map' \
	--exclude='public/hot' \
	--exclude='.yarn' \
	--exclude='e2e' \
	--exclude='playwright' \
	--exclude='playwright-report' \
	--exclude='tests' \
	--exclude='test-results' \
	--exclude='node_modules' \
	--exclude='.git' \
	--exclude='.idea' \
	--exclude='.vscode' \
	--exclude='*.env' \
	./*

# Verify the tarball
if tar -tf ./deploy.tar >/dev/null; then
	echo "Tarball created successfully."
else
	echo "Error creating tarball."
	exit 1
fi

caprover deploy -t ./deploy.tar --default
