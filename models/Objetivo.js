const mongoose = require('mongoose');

const objetivoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  icono: String
});

module.exports = mongoose.model('Objetivo', objetivoSchema);

