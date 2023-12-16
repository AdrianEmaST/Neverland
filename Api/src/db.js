const { Sequelize } = require('sequelize');
const ClientModel = require('./models/clients');
const BirthdayModel = require('./models/birthday')
const BalanceModel = require('./models/balance')

const sequelize = new Sequelize('neverland', 'root', 'admin', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: console.log,
});

// Importa y define el modelo Client
const Client = ClientModel(sequelize);  // Llama a la función que define el modelo
console.log('Client model:', Client);  // Agrega esta línea para verificar

// Importa y define el modelo Birthday
const Birthday = BirthdayModel(sequelize);
console.log('Birthday model:', Birthday);

// Importa y define el modelo Balance
const Balance = BalanceModel(sequelize)
console.log('Balance model:', Balance);

// Definir relaciones
Client.hasMany(Birthday, { foreignKey: 'clientId' });
Birthday.belongsTo(Client, { foreignKey: 'clientId' });

Client.hasOne(Balance, { foreignKey: 'clientId' });
Balance.belongsTo(Client, { foreignKey: 'clientId' });


const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = { conn: sequelize, Client, Birthday, Balance };