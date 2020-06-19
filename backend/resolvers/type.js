const { GraphQLScalarType } = require('graphql')
const {Meal} = require("../models/meal");
const {Order} = require("../models/order");

module.exports = {

    Order: {
        id: parent => parent.id || parent._id,
        meals: (parent, args, { db }) => {
            return db.Meal.find({ _id : { $in : parent.meals}})
        },
        orderType: (parent, args , {db})=>{ 
            if (parent.orderType == 'DELIVERY') return 'DELIVERY'; 
            else return 'PICKUP';
        },
        orderStatus: (parent, args , {db})=>{ 
            if (parent.orderType == 'DELETED') return 'DELETED'; 
            else if (parent.orderType == 'ONGOING') return 'ONGOING';
            else return 'SATISFIED';
        }
    },

    Meal: {
        id: parent => parent.id || parent._id   
    }


}