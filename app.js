
const express = require('express');
const app = express();
const routes = require('./routes/routes');
app.use('/', routes);
app.get('/favicon.ico', (req, res) => res.status(204).end());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
