const mongoose = require('mongoose');

const galeriaSchema = new mongoose.Schema({
  src: { type: String, required: true },
  titulo: { type: String, required: true },
  fecha: { type: String, required: true }
});

module.exports = mongoose.model('Galeria', galeriaSchema);