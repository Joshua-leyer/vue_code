const express = require('express')


const app = new express()

const ports = 3020

app.use( require('cors')() )
app.use(express.json())

app.use('/uploads', express.static(__dirname + '/uploads'))

// express 设置一个 全局变量的用的
app.set('secret', 'joshua')

require('./db.js')(app)
require('./routes/admin.js')(app)



app.get('/', (req, res) => {
    res.send('joshua')
})

app.listen(ports, () => {
    console.log(`Server app listening at http://localhost:${ports}`)
})