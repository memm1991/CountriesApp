const { Router } = require('express');
const countryRoute =require('./countries')
const activityRoute =require('./activity')


const router = Router();

router.use('/countries',countryRoute)
router.use('/activity',activityRoute)


module.exports = router;
