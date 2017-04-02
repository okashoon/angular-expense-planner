const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://expense-user:Planner321@ds147520.mlab.com:47520/expense-planner");

var Schema = mongoose.Schema;
var userSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    expenses: String,
    incomes: String
})

var User = mongoose.model('User', userSchema);


router.get('/', (req, res) => {
    res.send('api works');
})

router.post('/users', (req, res) => {

    var user = new User({
        firstName: req.body.firstName,
        email: req.body.email
    })
    user.save(err => {
        if (err)
            throw err;
    })
    res.end("user saved");
    console.log(req.body);
})

module.exports = router;