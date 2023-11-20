const { Router } = require("express");
const {postActivity, getAllCountriesActivities} = require ('../controllers/activitiesControllers')
const postRouter = Router ();

postRouter.post ('/', postActivity)

postRouter.get('/', getAllCountriesActivities)

module.exports = postRouter