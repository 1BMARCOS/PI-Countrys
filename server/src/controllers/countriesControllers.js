  const {Country, Activity} = require ('../db')
  // Crear Actividad.
  const createActivity = async (name, dificulty, duration, season) =>
  await Activity.create ({name, dificulty, duration, season})

  // Traer countries por ID
  const getCountryById = async (id, source) => {

  const country = source === 'api' ?

  console.log("Por favor ingrese un id valido") 

  : await Country.findByPk(id);

  return country;
  };

 const  getAllCountries = async () => {
    // buscar todos los countries en la db

    const dbCountries = await Country.findAll ()

      return [...dbCountries]
  };


const getAllActivities = async () => {
  // buscar todos las actividades en la db

  const dbActivities = await Activity.findAll ()

    return dbActivities
};
  module.exports = {
  createActivity,
  getCountryById,
  getAllCountries,
  getAllActivities
  }


  