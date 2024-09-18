const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product Name']
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: Number,
        required: false
    }
    },
    {
        timestamps:  true
    }
)

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
