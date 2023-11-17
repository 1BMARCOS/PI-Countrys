  const {Activity, Country} = require ('../db')
  const axios = require ('axios')


  // Crear Actividad.
  const createActivity = async (Nombre, Dificultad, Duración, Temporada) =>
  await Activity.create ({Nombre, Dificultad, Duración, Temporada})

  // Traer countries por ID
  const getCountryById = async (id, source) => {

  const country = source === 'api' ?

  console.log("Por favor ingrese un id valido") 

  : await Country.findByPk(id);

  return country;
  };


  module.exports = {
  createActivity,
  getCountryById,
  }