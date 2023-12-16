const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Balance = sequelize.define('Balance', {
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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    tableName: 'balances',
  });

  Balance.belongsTo(sequelize.models.Client, { foreignKey: 'clientId' });

  console.log('Balance model defined:', Balance);

  return Balance;
};