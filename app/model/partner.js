module.exports = (DataTypes)=>{
    return {
        name: DataTypes.STRING,
        shop: DataTypes.STRING,
        email: DataTypes.STRING,
        phone : DataTypes.INTEGER,
        address: DataTypes.TEXT,
        pincode : DataTypes.INTEGER
    }
}
