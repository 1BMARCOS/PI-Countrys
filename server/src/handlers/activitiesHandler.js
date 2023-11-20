const {Country, Activity} = require ('../db')

// Crear nueva actividad 
const createActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({ name, difficulty, duration, season });
  
    if (countries && countries.length > 0) {
      const relCountries = await Country.findAll({ where: { name: countries } });
      await newActivity.setCountries(relCountries);
    }
  
    return newActivity;
  };
// Traer todas las actividades

const getAllActivities = async () => {
    // buscar todos las actividades en la db
  
    const dbActivities = await Activity.findAll ()
  
      return dbActivities
  };
  module.exports = {
    createActivity,
    getAllActivities
  }