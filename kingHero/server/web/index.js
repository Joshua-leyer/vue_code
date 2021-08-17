module.exports = app => {
    const router = require('express').Router()
    router.get('/news/init')

    app.use('/web/api', router)
}