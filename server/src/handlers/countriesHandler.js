
const {getCountryById, getAllCountries, getAllActivities,createActivity } = require('../controllers/countriesControllers')
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
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.

//crear Actividad
const postActivity = async (req, res) => {
    try {
        const { name, dificulty, duration, season, } = req.body;
        const newActivity = await createActivity(name, dificulty, duration, season)
        res.status(201).json(newActivity)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


// Traer actividades en un objeto.
const getAllCountriesActivities = async (req, res) => {
    try {
        const activities = await getAllActivities()
        if (activities) {
            return res.status(200).json({ status: true, results: activities })

        } else {
            return res.status(200).json({ status: false, message: 'No se pudieron obtener las actividades' })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}



//Obtiene un arreglo de objetos
//Donde cada objeto es una actividad turística.




module.exports = {
    getAllCountriesHandler,
    getCountrieIdHandler,
    getAllCountriesActivities,
    postActivity,
};