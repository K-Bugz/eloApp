const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Add back once the homeroutes has been updated/ is correct. 
router.use('/', homeRoutes);
// add back once dashbaordRoutes are correct
router.use('/dashboard', dashboardRoutes);
// Add once the user-routes and org-routes are correct. 
router.use('/api', apiRoutes);

module.exports = router;
