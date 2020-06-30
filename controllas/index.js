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
router.post('/signup', (req,res) => {

    const { firstname, lastname, email, password } = req.body
    
    //console.log(req.body);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: `${email}`,
      from: `aaabdillahi@myseneca.ca`,
      subject: 'Yummies yummies',
      html: `<strong>thx bruh, i needed netflix too ${firstname} ${lastname}</br>
            Email: ${email}
            </strong>`,
    };

    sgMail.send(msg)
    .then(()=> {
        res.redirect("/splashy");
    })
    
    .catch(err => {
        console.log(`Error ${err}`);
    })

    const err1 = [];
    const err2 = [];
    const err3 = [];
    const err4 = [];
    const err5 = [];
    const err6 = [];

    if(req.body.firstname == "") {
        err1.push("This field is required.");
    }

    if(req.body.lastname == "") {
        err2.push("This field is required");
    }

    if(req.body.email == "") {
        err3.push("This field is required.");
    }

    if(req.body.password == "") {
        err4.push("This field is required");
    }
    if(err1.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: err1 
        });
        return;
    }

    if(err2.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: err2
        });
        return;
    }

    if(err3.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: err3
        });
        return;
    }

    if(err4.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: err4
        });
        return;
    }   
	});
module.exports = router;