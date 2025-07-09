const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Modelos
const Objetivo = require('./models/Objetivo');
const Comite = require('./models/Comite');
const Noticia = require('./models/Noticia');
const Contacto = require('./models/Contacto');
require('./mongo');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS: Solo permite peticiones desde tu GitHub Pages
app.use(cors({
  origin: 'https://ally0808.github.io'
}));

// Middlewares para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Si tienes imágenes o archivos estáticos
app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

// ---- RUTAS API ----

// Objetivos
app.get('/api/objetivos', async (req, res) => {
  try {
    const objetivos = await Objetivo.find();
    res.json(objetivos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener objetivos' });
  }
});

// Comités
app.get('/api/comites', async (req, res) => {
  try {
    const comites = await Comite.find();
    res.json(comites);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener comités' });
  }
});

// Noticias
app.get('/api/noticias', async (req, res) => {
  try {
    const noticias = await Noticia.find().sort({ fecha_publicacion: -1 });
    res.json(noticias);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

// Contacto (POST)
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ success: false, error: 'Faltan campos' });
  }

  try {
    await Contacto.create({ nombre, email, mensaje, fecha: new Date() });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Error al guardar contacto' });
  }
});

// Ruta base para probar que Render está vivo
app.get('/', (req, res) => {
  res.send('✅ Backend CEEAA funcionando');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

const Galeria = require('./models/Galeria'); // <--- NUEVO

// --- NUEVA RUTA: Galería ---
app.get('/api/galeria', async (req, res) => {
  try {
    const imagenes = await Galeria.find();
    res.json(imagenes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener galería' });
  }
});
