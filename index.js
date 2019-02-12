const APP = require('express')();
const port = 3000;
const DB = require('./app/config/db');
const bodyParser = require('body-parser');
const AppRoutes = require('./app/routes');
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: false }))
APP.use('/v1',AppRoutes);

DB.connect();
APP.listen(port,() => {
  console.log(`Example app listening on port ${port}!`);
  console.log(DB.models());
});


