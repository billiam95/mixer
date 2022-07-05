const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js')

router.get('/', (req, res) => {
    Drinks.find({}, (err, foundDrinks) => {
        res.json(foundDrinks)
    })
})

router.delete('/:id', (req, res) => {
    Drinks.findByIdAndRemove(req.params.id, (err, deletedDrink) => {
        res.json(deletedDrink);
    })
})

router.put('/:id', (req, res) => {
    Drinks.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedDrink) => {
        res.json(updatedDrink)
    })
})

router.post('/', (req, res) => {
    Drinks.create(req.body, (err, createdDrink) => {
        res.json(createdDrink);
    })
})

module.exports = router;
