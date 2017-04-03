const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://expense-user:Planner321@ds147520.mlab.com:47520/expense-planner");

var Schema = mongoose.Schema;
var expenseSchema = new Schema({
    name: String,
    amount: Number,
    category: String
})
var userSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    expenses: {
        Transport: [expenseSchema],
        Bills: [expenseSchema],
        Education: [expenseSchema],
        Transport: [expenseSchema],
        Clothes: [expenseSchema],
        Entertainment: [expenseSchema],
        Food: [expenseSchema],
        Gifts: [expenseSchema],
        Health: [expenseSchema],
        House: [expenseSchema],
        Pets: [expenseSchema],
        Sports: [expenseSchema]
    },
    incomes: String
})

var User = mongoose.model('User', userSchema);


router.get('/', (req, res) => {
    res.send('api works');
})

router.route('/users')
    .post((req, res) => {

        var user = new User(req.body)
        user.save(err => {
            if (err) res.send(err);
        })
        res.end("user saved");
        console.log(req.body);
    })

router.route('/users/:id')
    .post((req, res) => {
        User.findOneAndUpdate({ "id": req.params.id }, { $set: { "expenses": req.body } }, { new: true }, (err, expenses) => console.log(req.body))
    })

module.exports = router;