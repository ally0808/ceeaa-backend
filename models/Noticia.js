const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  fecha_publicacion: Date
});

module.exports = mongoose.model('Noticia', noticiaSchema);
