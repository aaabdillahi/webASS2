
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
app.use(express.static('stylesheet'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const indexcontroller = require("./controllas/index");
const signupcontroller = require("./controllas/signup");
const mealscontroller = require("./controllas/meals");
const logincontroller = require("./controllas/login");
const splashycontroller = require("./controllas/splashy");

app.use(express.urlencoded({
    extended: false
}));
//mapping 
app.use("/", indexcontroller);
app.use("/meals", mealscontroller);
app.use("/signup", signupcontroller);
app.use("/login", logincontroller);
app.use("/splashy", splashycontroller);
require('dotenv').config({
    path:"./configgits/key.env"
});
app.post('/login', (req,res) => {

    const err1 = [];
    const err2 = [];
    // const email = req.body;
    if(req.body.email == "") {
        err1.push("This field is required.");
    }

    if(req.body.password == "") {
        err2.push("This field is required");
    }

    //This is if the user failed validation
    if(err1.length > 0) {
        res.render('login', { 
            title: 'Login',
            errorMessages: err1 
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }

    if(err2.length > 0) {
        res.render('login', { 
            title: 'Login',
            errorMessages: err2
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server starting at port', PORT);
    
});