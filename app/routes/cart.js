const Router = require('express').Router();
const handler = require('../controller/cart');
Router.post('/canpreparedish', handler.canPrepareDish);
module.exports = Router;
