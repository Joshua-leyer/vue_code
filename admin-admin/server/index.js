const express = require('express')
const mongoose = require('mongoose')
const app = express()

const ports = 5000

app.use(require('cors')())

app.use(express.json())

mongoose.connect("mongodb://localhost/element-admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, function(err) {
    if (err) {
        console.log('mongodb connect error :', err)
    }
    console.log('mongoose connect success!!!')
})

const ArticleSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const Article = mongoose.model('Article', ArticleSchema)



app.get('/api', (req, res) => {
    res.send('joshua')
})

/**
 * @ add article
 */
app.post('/api/createArticle', async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

/**
 * @article list
 */
app.get('/api/articles', async (req, res) => {
    const articles = await Article.find()
    res.send(articles)
})

/**
 * @delete article
 */

app.delete('/api/delete/:id', async (req, res) => {
    console.log(req.params.id)
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

/**
 * @edit article
 */
app.get('/api/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

/**
 * @update article
 */
// put请求, 在express官网有讲支持的http动词有哪些.  但是没有详细讲东西分别对应的含义动作.需要另找别的地方学
app.put('/api/update/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
})




app.listen(ports, () => {
    console.log(`Example app listening at http://localhost:${ports}`)
})