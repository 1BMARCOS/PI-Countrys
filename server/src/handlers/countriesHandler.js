
const {createActivity, getCountryById} = require ('../controllers/countriesControllers')






const getAllCountriesHandler = (req, res) => {
    
//Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

const { name } = req.query;
    
    if (name) res.send (`Quiero buscar los countries que se llamen: ${name}`)
    
    else res.send (`Quiero todos los usuarios`)

}
const postActivity = async (req, res) => {
    try{
        const {Nombre, Dificultad, Duración, Temporada}= req.body;
        const newCountry = await createActivity(Nombre, Dificultad, Duración, Temporada)
        res.status(201).json (newCountry)
    } catch (error) {
        res.status (404).json ({error: error.message})
 }
}

const getCountrieIdHandler = async (req, res) => {
    const { id } = req.params;

    const source = isNaN(id) ? "bd" : "api"

    try {
        const country = await getCountryById (id, source);
        
        res.status(200).json(country);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.


const getCountrieActivitiesHandler = (req, res) => {
    res.status (200).send ('Estoy en getActivities')

// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
}



module.exports = {
        getAllCountriesHandler,
        getCountrieIdHandler,
        getCountrieActivitiesHandler,
        postActivity,
      };