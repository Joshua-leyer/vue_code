const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    username: { type: String },
    password: { 
        type: String,
        select: true, //mongoose 设定本字段是否能被查询的开关
        set: function(val) {
        return require('bcrypt').hashSync(val, 10)
    }}
})

module.exports = mongoose.model('AdminUser', schema)