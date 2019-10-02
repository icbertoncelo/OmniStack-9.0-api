const { Router } = require('express');

const routes = new Router();

const controllers = require('./app/controllers');

routes.get('/sessions', controllers.SessionController.store);

module.exports = routes;
