const {Schema, model} = require('mongoose');

const orderSchema = new Schema({
    
        name: {
            type: String
        },
        meals: {
            type: [Schema.Types.ObjectId]
        },
        /* user: {
            type: Schema.Types.ObjectId
        }, */
        orderPrice: Number,

        orderLocation: String,

        timeToPrepare: {
            type: Number
        }, 

        orderType: {
            type: String,
            enum: ['PICKUP', 'DELIVERY']
        },

        orderStatus: {
            type: String,
            enum: ['ONGOING' ,'DELETED', 'FINISHED'],
            default: 'ONGOING'
        }


})

const Order = model('Order', orderSchema);

exports.Order = Order;
