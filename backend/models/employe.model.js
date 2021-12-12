const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeSchema = new Schema({
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  anciennete: {
    type: String,
  },
  adresse: {
    type: Object,
    numero:{
      type: String,
    },
    rue:{
      type: String,
    },
    codepostal:{
      type: String,
    },
    ville:{
      type: String,
    },
    
  },
  tel: {
    type: String,
  },
  prime: {
    type: Number,
  },
}, {
  timestamps: true,
});

const Employe = mongoose.model('Employe', employeSchema);

module.exports = Employe;