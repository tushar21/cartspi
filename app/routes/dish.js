const Router = require('express').Router();

const handler = require('../controller/dish');
Router.use('/list', handler.list);


module.exports = Router;