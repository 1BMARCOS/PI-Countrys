const { Router } = require("express");

const countrieRouter = require ('./countryRouter')
const postRouter = require ('./postRouter')


const router = Router();


router.use ('/countries', countrieRouter)


router.use ('/activities', postRouter)


module.exports = router; 
