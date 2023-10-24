const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const FishSchema = new Schema({
    Name:{
        type: String,
        required: [true, 'Please provide email']
    },
    Description:{
        type: String,
        required: [true, 'Please provide fish Description']
    },
    ImageUrl:{
        type: String,
        required: [true, 'Please provide fish ImageUrl']
    },
})
const Fish = mongoose.model('Fish',FishSchema)
module.exports = Fish //เชื่อม Fish.js