const { DataTypes } = require('sequelize');

// Define el modelo Client y lo exporta
module.exports = function(sequelize) {
  const Client = sequelize.define('Client', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.TINYINT, // Cambiado de BOOLEAN a TINYINT
      defaultValue: 1,
    },
  }, {
    tableName: 'Clients', // Agrega esta línea para especificar el nombre de la tabla
  });

  console.log('Client model defined:', Client);  // Agrega esta línea para verificar

  return Client;
};