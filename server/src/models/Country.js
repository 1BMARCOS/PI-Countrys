const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id : {
      type: DataTypes.STRING(3), //cca3
      allowNull: false,
      primaryKey : true,
      validate:{
       len: {
        args: [3, 3],
        msg: 'El campo debe tener exactamente 3 caracteres.',
      },
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      validate :{
        isIn: [[".png"]],
        isUrl: true,
      }
    },
    continent: {
      type: DataTypes.ENUM('South America', 'North America', 'Oceania', 'Asia', 'Antarctica', 'Europe', 'Africa'),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area:{
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
  });
};


