module.exports = (DataTypes)=>{
    return {
        userId: DataTypes.INTEGER,
        partnerId: DataTypes.INTEGER,
        dishId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        subtotal : DataTypes.INTEGER,
        deliveryTime : DataTypes.DATE
    }
}
