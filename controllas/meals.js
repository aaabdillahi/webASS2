const express = require('express')
const router = express.Router();
router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/meals', (req, res) =>{
    res.render('meals');
});

router.get('/signup', (req, res) =>{
    res.render('signup');
});

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/recover', (req, res) =>{
    res.render('recover');
});

module.exports = router;