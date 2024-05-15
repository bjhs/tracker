.PHONY: install test build clean deploy

createProject:
	npx create-next-app@13.4.13

# configure dependencies
# The dependencies are installed with the create Project. 
# Even the typescript types are installed.

# Install dependencies
install:
	npm install

# Run tests
test:
	npm run test

# Build the project - use it for PRD
build:
	npm run build

# Clean up the project
clean:
	rm -rf node_modules
	rm -rf build

# Deploy the project
deploy:
	npm run deploy

# Start the project
start:
	npm start

# Start the project in development mode - renders components dynamiclly and auto reloads after a change.
dev:
	npm run dev
