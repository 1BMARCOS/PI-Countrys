const { Router } = require("express");
const {postActivity} = require ('../handlers/countriesHandler')
const postRouter = Router ();

postRouter.post ('/', postActivity)
module.exports = postRouter