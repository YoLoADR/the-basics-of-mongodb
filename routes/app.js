var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    // Pour récuperer des valeurs dans notre base de données
    // On utilise find, la dns notre cas on utilise findOne avec un objet vide pour qu'il nous récupère le premier objet - avec un call back parce que c'est une méthode asynchrone
    User.findOne({}, function(err, doc){
        if(err){
            //(X) console.log(err) -> ne retourne rien et donc la méthode s'execute toujours
            res.send(err);
        }

        //(!) Attention de bien mettre la réponse node à l'interieure de la méthode .findOne() - parce que sinon la réponse ne sera pas encore prête (async)
        res.render('node', {email : doc.email}); // On créer une variable email a qui on donne la valeur du retour doc.email
    });
    
});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    // Ici nous allons configurer un nouvelle utilisateur
    var user = new User({
       firstName: 'Yohann',
       lastName: 'Ravino',
       password: '1234',
       email:  email
    });
    // Grace à la methode .save() on stock la valeur/collection dans Mongo
    user.save();
    res.redirect('/');
});

module.exports = router;
