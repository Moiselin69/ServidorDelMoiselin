// app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'vista')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vista', 'paginaEntrada', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});