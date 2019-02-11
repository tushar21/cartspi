const models = require('../config/db').models();


module.exports.list = function(req, res){
    console.log(models, "models");
    models.Dish.findAll({},(dishes)=>{
        req.send(dishes);
    })
}
