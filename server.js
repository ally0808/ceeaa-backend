const express = require('express');
const cors = require('cors');
const path = require('path');

const Objetivo = require('./models/Objetivo');
const Comite = require('./models/Comite');
const Noticia = require('./models/Noticia');
const Contacto = require('./models/Contacto');
require('./mongo');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'docs')));
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

// Objetivos
app.get('/api/objetivos', async (req, res) => {
  try {
    const objetivos = await Objetivo.find();
    res.json(objetivos);
  } catch (err) {
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

// Comités
app.get('/api/comites', async (req, res) => {
  try {
    const comites = await Comite.find();
    res.json(comites);
  } catch (err) {
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

// Noticias
app.get('/api/noticias', async (req, res) => {
  try {
    const noticias = await Noticia.find().sort({ fecha_publicacion: -1 });
    res.json(noticias);
  } catch (err) {
    res.status(500).json({ error: 'Error en la base de datos' });
  }
});

// Contacto
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ success: false, error: 'Faltan campos' });
  }

  try {
    await Contacto.create({ nombre, email, mensaje, fecha: new Date() });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Error en la base de datos' });
  }
});

// Ruta base — redirige al index.html automáticamente
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
