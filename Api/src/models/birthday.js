const { DataTypes } = require('sequelize');

// Define el modelo Birthday y lo exporta
module.exports = function(sequelize) {
  const Birthday = sequelize.define('Birthday', {
    id: {
      type: DataTypes.INTEGER,
      unsigned: true,
      primaryKey: true,
      autoIncrement: true,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    tableName: 'birthdays',
  });

  console.log('Birthday model defined:', Birthday);  // Agrega esta línea para verificar

  return Birthday;
};