const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    'Activity', {
    id: {
      type: DataTypes.UUID, //UUID es para que genere un número random con letras/números y único, habilitado en sql
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, //no permito que esté vacío
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Duración: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Temporada: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
};