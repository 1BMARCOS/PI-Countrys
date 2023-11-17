const axios = require("axios");
const api = ('http://localhost:5000/countries');
const { Country } = require('../db.js');


const loadDb = async (req, res) => {
    try {
        const { data } = await axios(api);
        if (data.length) {

            const countries = await data.map((ct) => {
                return {
                    id: ct.cca3,
                    name: ct.name.common,
                    flag: ct.flags.svg,
                    continent: ct.continents[0],
                    capital: ct.capital ? ct.capital[0] : "No Capital",
                    subregion: ct.subregion ? ct.subregion : "No Data",
                    area: ct.area,
                    population: ct.population
                }
            });
            if (countries.length === 250) {
                const bkResponse = await Country.bulkCreate(countries)
                
                if(bkResponse) {
                    return res.status(200).json({
                        status: true,
                        bkResponse
                    })
                } else {
                    return res.status(200).json({
                        status: false,
                        message: 'No se crearon los países'
                    })
                }
            }
        }
    } catch (error) {
        return ('Error al cargar db',error.message)
    }
}

module.exports = loadDb;