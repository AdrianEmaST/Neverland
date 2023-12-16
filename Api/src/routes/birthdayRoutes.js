const express = require('express');
const router = express.Router();
const { getAllBirthdays, createBirthday, deleteBirthday, updateBirthday } = require('../controllers/birthdayController');

// Consultar todos los cumpleaños
router.get('/clients/:clientId/birthdays', getAllBirthdays);

// Crear nuevo cumpleaños
router.post('/clients/:clientId/birthdays', createBirthday);

// Borrar cumpleaños
router.delete('/clients/:clientId/birthdays/:id', deleteBirthday);

// Actualizar cumpleaños
router.put('/clients/:clientId/birthdays/:id', updateBirthday);

module.exports = router;