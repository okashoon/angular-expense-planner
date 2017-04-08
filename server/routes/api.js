const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://expense-user:Planner321@ds147520.mlab.com:47520/expense-planner");

var Schema = mongoose.Schema;
var expenseSchema = new Schema({
    name: String,
    amount: Number,
    category: String
});

var incomeSchema = new Schema({
    name: String,
    amount: Number,
    category: String
});

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
        Salary: [incomeSchema],
        Deposits: [incomeSchema],
        Savings: [incomeSchema],
        Bonus: [incomeSchema],
        Rent: [incomeSchema],
        Other: [incomeSchema]
    }
})

var Expense = mongoose.model('Expense', expenseSchema);
var Income = mongoose.model('Income', incomeSchema);
var User = mongoose.model('User', userSchema);

var visitorSchema = new Schema({
    data: String
})

var Visitor = mongoose.model('Visitor', visitorSchema);



router.get('/a', (req, res) => {
    var newVisitor = new Visitor(req.headers);
    newVisitor.save();
    res.send(req.headers);
})

router.post('/users/signup', (req, res) => {
    User.find({ email: req.body.email }, (err, user) => {
        if (user.length < 1) {
            var newUser = new User(req.body)
            newUser.save(err => {
                if (err) res.send(err);
                res.json(newUser);
                console.log(newUser);
            })

        } else {
            res.json({ message: "user exists" })
        }


    }).limit(1);

})

router.post('/users/login', (req, res) => {
        User.find({ email: req.body.email }, (err, users) => {
            if (users.length >= 1) {
                if (req.body.password === users[0].password) {
                    res.json(users[0]);
                } else {
                    res.json({ message: "wrong password" });
                }
            } else {
                res.json({ message: "wrong email" });
            }
        })
    })
    //get all users
router.get('/users/:id', (req, res) => {
    var data = {};
    User.find({ id: req.params.id }, (err, users) => {
        if (err) res.end();
        res.send(users);
    })

})


router.route('/users/:id/expenses')
    //add expense
    .post((req, res) => {
        User.find({ "id": req.params.id }, (err, users) => {
            let expense = new Expense(req.body);
            users[0].expenses[req.body.category].push(expense);
            users[0].save();
            res.send("expense added");
        })

    })
    //get expense
    .get((req, res) => {
        User.find({ id: req.params.id }, (err, users) => {
            res.json(users[0].expenses);
        })
    })
    //update expense
    .put((req, res) => {
        User.find({ "id": req.params.id }, (err, users) => {
            let expenses = users[0].expenses[req.body.category];
            for (let expense of expenses) {
                if (expense._id == req.body._id) {
                    expenses[expenses.indexOf(expense)] = req.body;
                    res.send("expense updated");

                }
            }
            users[0].save();
        })
    })
    //delete expense
router.put('/users/:id/expenses/delete', (req, res) => {
    User.find({ "id": req.params.id }, (err, users) => {

        let expenses = users[0].expenses[req.body.category];
        for (let expense of expenses) {
            if (expense._id == req.body._id) {
                expenses.splice(expenses.indexOf(expense), 1);
                res.send("expense deleted");

            }
        }
        users[0].save();
    })
})

router.route('/users/:id/incomes')
    //add income
    .post((req, res) => {
        User.find({ "id": req.params.id }, (err, users) => {
            let income = new Income(req.body);
            users[0].incomes[req.body.category].push(income);
            users[0].save();
            res.send('income added');
        })
    })
    //get all incomes for a user
    .get((req, res) => {
        User.find({ id: req.params.id }, (err, users) => {
            res.json(users[0].incomes);
        })
    })
    //update income
    .put((req, res) => {
        User.find({ "id": req.params.id }, (err, users) => {
            let incomes = users[0].incomes[req.body.category];
            for (let income of incomes) {
                if (income._id == req.body._id) {
                    incomes[incomes.indexOf(income)] = req.body;
                    res.send("income updated");
                }
            }
            users[0].save();
        })
    })

router.put('/users/:id/incomes/delete', (req, res) => {
    User.find({ "id": req.params.id }, (err, users) => {

        let incomes = users[0].incomes[req.body.category];
        for (let income of incomes) {
            if (income._id == req.body._id) {
                incomes.splice(incomes.indexOf(income), 1);
                res.send("income deleted");

            }
        }
        users[0].save();
    })
})


module.exports = router;