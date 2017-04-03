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
    incomes: {
        Salary: [expenseSchema],
        Deposits: [expenseSchema],
        Savings: [expenseSchema],
        Bonus: [expenseSchema],
        Rent: [expenseSchema],
        Other: [expenseSchema]
    }
})

var User = mongoose.model('User', userSchema);


router.get('/', (req, res) => {
    res.send('api works');
})

router.route('/users')
    //signup user
    .post((req, res) => {
        User.find({ email: req.body.email }, { email: 1, id: 1 }, (err, user) => {
            if (user.length < 1) {
                var newUser = new User(req.body)
                newUser.save(err => {
                    if (err) res.send(err);
                    res.json({ message: "user saved" });
                })

            } else {
                res.json({ message: "user exists" })
            }


        }).limit(1);

    })

router.get('/users/:id', (req, res) => {
    var data = {};
    User.find({ id: req.params.id }, (err, users) => {
        if (err) res.end();
        res.send(users);
        console.log(users);
    })

})

router.route('/users/:id/expenses')
    .post((req, res) => {
        User.findOneAndUpdate({ "id": req.params.id }, { $set: { "expenses": req.body } }, { new: true }, (err, expenses) => {})
    })
router.route('/users/:id/incomes')
    .post((req, res) => {
        User.findOneAndUpdate({ "id": req.params.id }, { $set: { "incomes": req.body } }, { new: true }, (err, incomes) => {})
    })
module.exports = router;