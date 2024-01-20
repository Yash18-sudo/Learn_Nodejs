const Mongoose = require('mongoose');
const menuSchema = new Mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        required: true
    },
    is_drink:{
        type: Boolean,
        required: true
    },
    ingredients:{
        type: Array,
        required: true
    },
    num_sales:{
        type: Number,
        required: true
    }
});

const MenuItem = Mongoose.model('MenuItem', menuSchema);
module.exports = MenuItem;
