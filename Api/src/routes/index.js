const express = require('express');
const router = express.Router();
const clientsRoute = require('./clientsRoute');
const birthdayRoutes = require('./birthdayRoutes');
const balanceRoutes = require('./balanceRoutes');

router.use(clientsRoute);
router.use(birthdayRoutes);
router.use(balanceRoutes);

// Define your routes here
router.get('/test', (req, res) => {
    res.send('¡La API está funcionando correctamente!');
  });


module.exports = router;