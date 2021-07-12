module.exports = app => {
    const express = require('express')
    const router = express.Router()

    const Category = require('../models/Category')

    router.post('/', async (req, res) => {
        const model = await Category.create(req.body)
        res.send(model)
    })
    router.get('/', async (req, res) => {
        // 这里有点绕 , 我关联我自己.....
        const items = await Category.find().populate('parent').limit(10)
        console.log('/categories get items is ', items)
        res.send(items)
    })
    /**
     * @获取分类详情
     */
    router.get('/:id', async (req, res) => {
        const data = await Category.findById(req.params.id)
        res.send(data)
    })

    /**
     * @put接口
     */
    router.put('/:id', async (req, res) => {
        const model = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    /**
     * @delete接口
     */
    router.delete('/:id', async (req, res) => {
        console.log('get delete function')
        const model = await Category.findByIdAndDelete(req.params.id)
        res.send({
            delete: true
        })
    })

    // app.use('/admin/api', router)
    app.use('/admin/api/rest/:resource', router)
}