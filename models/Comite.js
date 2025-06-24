const mongoose = require('mongoose');

const comiteSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String
});

module.exports = mongoose.model('Comite', comiteSchema);
