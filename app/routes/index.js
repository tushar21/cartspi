const Router = require('express').Router();
const dishRoutes = require('./dish');
const cartRoutes = require('./cart');

Router.use('/dish', dishRoutes);
Router.use('/cart', cartRoutes);

module.exports = Router;