module.exports = (DataTypes)=>{
    return {
        dishId: DataTypes.INTEGER,
        partnerId: DataTypes.INTEGER,
        price: DataTypes.INTEGER, 
        available : DataTypes.BOOLEAN
    }
}
