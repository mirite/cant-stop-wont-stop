#!/bin/bash
yarn install
yarn build
composer install --no-dev --no-interaction --optimize-autoloader
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
