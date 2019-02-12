const DataTypes = require('sequelize');
module.exports.Dish = require('./dish')(DataTypes);
module.exports.Partner = require('./partner')(DataTypes);
module.exports.PartnerDish = require('./partnerDish')(DataTypes);
module.exports.User = require('./user')(DataTypes);
module.exports.PartnerDeliveryPincode = require('./partnerDeliveryPincode')(DataTypes);
module.exports.Delivery = require('./delivery')(DataTypes);
module.exports.Cart = require('./cart')(DataTypes);
