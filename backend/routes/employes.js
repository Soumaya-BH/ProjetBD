const router = require('express').Router();
let Employe = require('../models/employe.model');

router.route('/').get((req, res) => {
  Employe.find()
    .then(employes => res.json(employes))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const anciennete = req.body.anciennete;
  const numero = req.body.adresse.numero;
  const rue = req.body.adresse.rue;
  const codepostal = req.body.adresse.codepostal;
  const ville = req.body.adresse.ville;
  const tel = req.body.tel;
  const prime = req.body.prime;

  const newEmploye = new Employe({
    nom,
    prenom,
    anciennete,
    adresse:{
      numero,
      rue,
      codepostal,
      ville,
    },
    tel,
    prime,
  });

  newEmploye.save()
  .then(() => res.json('Employe added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//geByID
router.route('/:id').get((req, res) => {
  Employe.findById(req.params.id)
    .then(employe => res.json(employe))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Delete
router.route('/:id').delete((req, res) => {
  Employe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employe deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update
router.route('/update/:id').put((req, res) => {
  Employe.findById(req.params.id)
    .then(employe => {
      employe.nom = req.body.nom;
      employe.prenom = req.body.prenom;
      employe.anciennete = req.body.anciennete;
      employe.adresse.numero = req.body.adresse.numero;
      employe.adresse.rue = req.body.adresse.rue;
      employe.adresse.codepostal = req.body.adresse.codepostal;
      employe.adresse.ville = req.body.adresse.ville;
      employe.tel = req.body.tel;
      employe.prime = req.body.prime;

      employe.save()
        .then(() => res.json('Employe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;