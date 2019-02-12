const Sequelize = require('sequelize');
const host = process.env.DATABASE_HOST || 'pocmsg.cg5tdugqa2hh.us-east-1.rds.amazonaws.com';
const db_name = process.env.DATABASE_HOST || 'pocdb';
const db_user = process.env.DATABASE_USER || 'user1';
const db_password = process.env.DATABASE_PASSWORD || 'password1';
console.log(host, "host");
const Schemas = require('../model/schemas');
var models = {}; 

module.exports.connect = ()=>{
    const sequelize = new Sequelize(db_name, db_user, db_password, {
        host: host,
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        operatorsAliases: false
    });


    console.log('Connecting to DB');

    sequelize.authenticate()
    .then(()=>{
        console.log('DB connection successfull');
        for(let model in Schemas){
            models[model] = sequelize.define(model, Schemas[model]);
        }

        sequelize.sync().then(()=>{
            console.log("Tables created");
        })

        console.log(models, "models")
    })
    .catch((err)=>{
        console.error('Error in DB connection');
        throw new Error(err);
    });
}


module.exports.models = ()=>{return models};
