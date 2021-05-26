const mongoose = require('mongoose');


const userschema = mongoose.Schema({
    isbn: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: "isbn must have 10 digits"
        },
    },
    bookName: {
        type: String,
        required: [true, 'bookname is required'],
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookPublisher: {
        type: String,
        required: true
    },
    numberOfPages: {
        type: Number,
        required: true
    }
})

const usermodel = mongoose.model("books", userschema);
module.exports = { usermodel }