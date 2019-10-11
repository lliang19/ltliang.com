start:
	npm run build:backend
	npm run build:frontend:dev
	DEV="true" npm start

start-prod:
	npm run build:backend
	npm run build:frontend
	npm start