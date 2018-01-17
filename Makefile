
prepare:
	npm i -g @adonisjs/cli
	npm i -g pm2

init:
	npm install

dev:
	adonis serve --dev

start:
	pm2 start server.js --name emx

stop:
	pm2 stop emx


