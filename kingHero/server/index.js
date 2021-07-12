const express = require('express')


const app = new express()

const ports = 3020

app.use( require('cors')() )
app.use(express.json())


require('./db.js')(app)
require('./routes/admin.js')(app)



app.get('/', (req, res) => {
    res.send('joshua')
})

app.listen(ports, () => {
    console.log(`Server app listening at http://localhost:${ports}`)
})