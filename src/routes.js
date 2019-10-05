const { Router } = require('express');
const multer = require('multer');

const controllers = require('./app/controllers');
const middlewares = require('./app/middlewares');

const multerConfig = require('./config/multer');

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', controllers.UserController.store);
routes.post('/sessions', controllers.SessionController.store);

routes.use(middlewares.auth);

routes.get('/spots', controllers.SpotController.index);
routes.post(
  '/spots',
  upload.single('thumbnail'),
  controllers.SpotController.store
);
routes.get('/dashboard', controllers.DashboardController.show);
routes.post('/spots/:spot_id/bookings', controllers.BookingController.store);

module.exports = routes;
