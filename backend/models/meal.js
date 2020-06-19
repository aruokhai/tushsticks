const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    
        name: {
            type: String
        },
        price: {
            type: Number
        },
        timeToPrepare: {
            type: Number
        },
        tags: {
            type: [String]
        },
        url: {
            type: String
         }
})

const Meal = mongoose.model('Meal', mealSchema);

exports.Meal = Meal;
