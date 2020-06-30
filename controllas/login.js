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

router.get('/splashy', (req, res) =>{
    res.render('splashy');
});

module.exports = router;