const express = require('express');
const router = express.Router();
const { dateLogger, messageLogger } = require('../middlewares/logger');

router.use(dateLogger);  
router.use(messageLogger);

router.get('/route1', (req, res) => {
    res.send('Estás en la Ruta 1');
});

router.get('/route2', (req, res) => {
    res.send('Estás en la Ruta 2');
});

module.exports = router;
