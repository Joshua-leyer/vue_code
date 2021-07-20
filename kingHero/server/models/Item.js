const mongoose = require('mongoose')

let Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {type: String },
    icon: {type: String }
})


module.exports = mongoose.model('Item', itemSchema)

