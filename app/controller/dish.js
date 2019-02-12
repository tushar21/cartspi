const models = require('../config/db').models();


module.exports.list = function(req, res){
    console.log(models, "models in controller");
    models.Dish.findAll({})
    .then((dishes)=>{
        res.send(dishes);
    })
}
