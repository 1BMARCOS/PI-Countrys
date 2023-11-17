const {Router} = require ('express');
const { 
    getCountrieActivitiesHandler,
    getAllCountriesHandler,
    getCountrieIdHandler,
     } = require('../handlers/countriesHandler');

const loadCountries = require('../controllers/countriesReq');

const countrieRouter = Router ();


countrieRouter.get('/', getAllCountriesHandler);

countrieRouter.get('/:id', getCountrieIdHandler);

countrieRouter.get('/activities', getCountrieActivitiesHandler)

countrieRouter.get('/loadDatabaseCountries', loadCountries)

module.exports = countrieRouter;