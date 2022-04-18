const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const orgsRoutes = require('./organization-routes.js');


router.use('/users', userRoutes);
// Not completely updated!!!
// router.use('/orgs', orgsRoutes);


module.exports = router;
