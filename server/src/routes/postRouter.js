const { Router } = require("express");
const {postActivity, getAllCountriesActivities} = require ('../handlers/countriesHandler')
const postRouter = Router ();

postRouter.post ('/', postActivity)

postRouter.get('/', getAllCountriesActivities)

module.exports = postRouter