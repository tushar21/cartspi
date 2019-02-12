const models = require('../config/db').models();

module.exports.canPrepareDish = function(req, res){
    const data ={ ...req.body };
    // Find the user pincode
    models.User.findAll({where: {id: data.userId}})
    .then((user)=>{
        let whereQry ={ pincode: user[0].pincode}
        if(data.partnerId){
            whereQry.partnerId = data.partnerId;
        }
        // Check if the partner delivers at user area

        return models.PartnerDeliveryPincode.findAll({where: whereQry});
    })
    .then((partnerPincodeRes)=>{
        // throw error if partner does deliver to user area
        if(!partnerPincodeRes.length) res.status(500).send("Partner does not deliver to your area");
        if(!data.partnerId) data.partnerId = partnerPincodeRes[0].partnerId;
        // Check if the dish is available at the partner 
        return models.PartnerDish.findAll({where : { dishId: data.dishId, partnerId: data.partnerId, available : 1 }})
    })
    .then((partnerDishRes)=>{
        if(!partnerDishRes.length) res.status(422).send({result: 'error', message: "Partner cannot prepare this dish"});
        // Add to cart
        let dishPrice = partnerDishRes[0].price * data.dishQuantity;
        return models.Cart.create({
            userId : data.userId,
            partnerId : data.partnerId,
            dishId: data.dishId,
            subtotal: dishPrice,
            quantity: data.dishQuantity
        })
    })
    .then((cartData)=>{
        res.send({status:'success', message : 'Added to cart successfully', data :cartData });
    })
    .catch((err)=>{
        console.log("Error in canprepearedish method cart controller");
        res.status(500).send({status : 'error', message : 'Error occured', data : err});
    })
}
