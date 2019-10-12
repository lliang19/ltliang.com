start:
	rm -rf dist
	npm run build:backend
	npm run build:frontend:dev
	DEV="true" npm start

start-prod:
	rm -rf dist
	npm run build:backend
	npm run build:frontend
	npm start