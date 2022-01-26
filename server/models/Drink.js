const mongoose = require('mongoose');

const {Schema} = mongoose;

const drinkSchema = new Schema({
    drinkname:{
        type: String,
        required: true,
        trim: true
    },
    size:{
        type: String,
        required: true,
        default:"grande"
    },
    price:{
        type: Numner,
        required: true,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    coffeeaddin:{
        type:Schema.Types.ObjectId,
        ref:"Coffeeaddin",
    }

})

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;