var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
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
