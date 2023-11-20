const { Router } = require("express");

const countrieRouter = require ('../routes/countryRouter')
const postRouter = require ('../routes/postRouter')


const router = Router();


router.use ('/countries', countrieRouter)


router.use ('/activities', postRouter)


module.exports = router; 
