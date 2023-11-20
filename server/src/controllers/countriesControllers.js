  const {Country, Activity} = require ('../db')

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

  module.exports = {
  getCountryById,
  getAllCountries,
  }


  