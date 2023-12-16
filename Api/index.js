const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const { getAllUsers, getUserById, getAllClients, getClientById } = require('./queries');

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001');
  });
  // Llama a las funciones de consulta
//getAllUsers();
//getUserById(1);
//getAllClients(); // Llama a la función para obtener todos los clientes
//getClientById(1); // Llama a la función para obtener un cliente por ID

});