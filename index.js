const APP = require('express')();
const port = 3000;
const DB = require('./app/config/db');

DB.connect();
APP.listen(port, () => {console.log(`Example app listening on port ${port}!`);
        console.log(DB.models());
})
const dishRoutes = require('./app/routes/dish');


APP.use('/dish',dishRoutes);