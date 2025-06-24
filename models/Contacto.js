const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  mensaje: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contacto', contactoSchema);
