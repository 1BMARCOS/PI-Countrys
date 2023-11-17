
const server = require("./src/server");
const { conn } = require('./src/db.js');
const loadCountries = require("./src/controllers/countriesReq.js");
const PORT = 3001;



// server.listen(PORT, async () => {
//   try {
//     await conn.sync ({force: true})
//     await loadCountries()
//     console.log('Se montó en el puerto 3001');

//   } catch (error) {
//     console.log(error.message);
//   }
// })









conn.sync({ alter: true }).then(() => {
server.listen(PORT, () => {
  loadCountries ();
  
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
