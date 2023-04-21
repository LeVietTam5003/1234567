const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const categorySchema = new Schema({
    name: {
        type: String,
        required: [true,'Name bắc buộc phải nhập'],
    },
    description: {
        type: String,
    },
});


const Category = model('category',categorySchema);
module.exports = Category;
