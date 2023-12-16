const express = require('express');
const router = express.Router();
const { getAllBalances, createBalance, deleteBalance, updateBalance } = require('../controllers/balanceController');

// Consultar todos los saldos
router.get('/clients/:clientId/balances', getAllBalances);

// Crear nuevo saldo
router.post('/clients/:clientId/balances', createBalance);

// Borrar saldo
router.delete('/clients/:clientId/balances/:id', deleteBalance);

// Actualizar saldo
router.put('/clients/:clientId/balances/:id', updateBalance);

module.exports = router;