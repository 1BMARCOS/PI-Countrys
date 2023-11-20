
const {getCountryById, getAllCountries,  } = require('../controllers/countriesControllers')
const {Country, Activity} = require('../db')

// Traer todos los countries o por nombre.
const getAllCountriesHandler = async (req, res) => {
    try {
        const {name} = req.query
        if (name){
            const oneCountry = await Country.findOne({where: {name}})
            if (oneCountry){
                return res.status(200).json({status:true, oneCountry})
            }else{
                return res.status(200).json({status: false, message: 'No se pudo traer el nombre'})
            }
        }
        const countries = await getAllCountries()

        if (countries) {

            return res.status(200).json({ status: true, results: countries })

        } else {
            return res.status(200).json({ status: false, message: 'No se pudo obtener los countries' })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

// Traer pais por ID de 3 LETRAS
const getCountrieIdHandler = async (req, res) => {
    const { id } = req.params;
    
    const source = isNaN(id) ? "bd" : "api"
    
    try {
        const country = await getCountryById(id, source);
        
        res.status(200).json(country);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    getAllCountriesHandler,
    getCountrieIdHandler,
};