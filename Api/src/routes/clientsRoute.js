const express = require('express');
const router = express.Router();
const { getAllClients, createClient, deleteClient, updateClient } = require('../controllers/clientsController');

// Consultar todos los clientes
router.get('/clients', getAllClients);

// Crear nuevo cliente
router.post('/clients', createClient);

// Borrar cliente
router.delete('/clients/:id', deleteClient);

// Actualizar cliente
router.put('/clients/:id', updateClient);

module.exports = router;