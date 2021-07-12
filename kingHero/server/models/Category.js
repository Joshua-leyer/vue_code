const mongoose = require('mongoose')



// 这里的操作有点难理解..
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})

module.exports = mongoose.model('Category', schema)