// queries.js
// const { conn } = require('./src/db.js');

// const getAllUsers = async () => {
//   try {
//     const users = await conn.query('SELECT * FROM Users', { type: conn.QueryTypes.SELECT });
//     console.log(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// };

// const getUserById = async (userId) => {
//   try {
//     const user = await conn.query('SELECT * FROM Users WHERE user_id = :userId', {
//       replacements: { userId },
//       type: conn.QueryTypes.SELECT,
//     });

//     if (user.length > 0) {
//       console.log(user[0]);
//     } else {
//       console.log('User not found');
//     }
//   } catch (error) {
//     console.error('Error fetching user:', error);
//   }
// };

// const getAllClients = async () => {
//     try {
//       const clients = await conn.query('SELECT * FROM Clients', { type: conn.QueryTypes.SELECT });
//       console.log(clients);
//     } catch (error) {
//       console.error('Error fetching clients:', error);
//     }
//   };
  
//   const getClientById = async (clientId) => {
//     try {
//       const client = await conn.query('SELECT * FROM Clients WHERE clientId = :clientId', {
//         replacements: { clientId },
//         type: conn.QueryTypes.SELECT,
//       });
  
//       if (client.length > 0) {
//         console.log(client[0]);
//       } else {
//         console.log('Client not found');
//       }
//     } catch (error) {
//       console.error('Error fetching client:', error);
//     }
//   };

// module.exports = { getAllUsers, getUserById, getAllClients, getClientById };