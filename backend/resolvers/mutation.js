const {Meal} = require("../models/meal");
const {Order} = require("../models/order");

module.exports = {

    addMeal : async (parent, args,db) =>
    {
       let newMeal =  new Meal(args.input);
       let answer = await newMeal.save();
       console.log(newMeal);
       return args.input;
    },

    placeOrder: async (parent, args, db) => {
        let newOrder = new Order(args.input);
        await newOrder.save();
        return args.input;
    }
}