const express = require('express');

const app = express();

const mongoose = require('mongoose');

const admin= require('./models/auth');

const booking= require('./models/booking');

const courts= require('./models/courts');

const numbook= require('./models/numbook');


const dbMon = 'mongodb+srv://admin:admin@cluster0.useamp8.mongodb.net/DummyBooking?retryWrites=true&w=majority';
mongoose.set('strictQuery', true)
mongoose.connect(dbMon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Sucessfully Connected to MongoDB'), app.listen(8080))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');


//static & middleware
app.use(express.static('res'));
app.use(express.urlencoded({extended: true}));


app.use((req, res, next) =>{
    console.log('Request made at' , req.hostname);
    console.log('path :', req.path);
    console.log('method :', req.method);
    next();
});

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/login.ejs', (req,res) => {
    res.render('login');
})

app.get('/home.ejs', (req,res) => {
    res.render('home');
})

app.get('/court.ejs', (req,res) => {
    res.render('court');
})

app.get('/fac.ejs', (req,res) => {
    res.render('fac');
})

app.get('/facpublic.ejs', (req,res) => {
    res.render('facpublic');
})

app.get('/index.ejs', (req,res) => {
    res.render('index');
})

app.get('/admindash.ejs', (req,res) => {
    res.render('admindash.ejs');
})

app.get('/adminlist.ejs', (req,res) => {
    booking.find().sort({createdAt: 1})
    .then(result => {
    res.render('adminlist.ejs',{booking : result});
    })
})

app.get('/editBook.ejs', (req,res) => {
    res.render('editBook.ejs');
})

app.get('/editCourt.ejs', (req,res) => {
    res.render('editCourt.ejs');
})

app.use((req,res) => {
    res.status(404).render('404');
});