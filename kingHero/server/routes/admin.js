module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })

    // const Category = require('../models/Category')

    /**
     * @post表单提交
     * axois post
     */
    router.post('/', async (req, res) => {
        // const Model = require(`../models/${req.params.resource}`)
        const model = await req.Model.create(req.body)
        res.send(model)
    })


    router.get('/', async (req, res) => {
        console.log('enter / path')
        console.log('this path is ', __dirname)
        let str = `../module/${req.params.resource}`
        // console.log('自己测试 str is ', str)
    
        const queryOptions = {}
        //这里 modelName 重名 了, 不是自己定义的, 是mongoose 自带的一个接口
        if (req.Model.modelName == 'Category') {
            queryOptions.populate = 'parent'
        }
        // 这里有点绕 , 我关联我自己.....
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        // 官网对setOptions 的描述真的感人. 草
        // console.log('/categories get items is ', items)
        res.send(items)
    })

    /**
     * @获取分类详情
     */
    router.get('/:id', async (req, res) => {
        const data = await req.Model.findById(req.params.id)
        console.log('get /:id router function is ', req.path)
        res.send(data)
    })

    /**
     * @put接口
     */
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        console.log('put接口接受到的数据是', req.body)
        res.send(model)
    })
    /**
     * @delete接口
     */
    router.delete('/:id', async (req, res) => {
        console.log('get delete function')
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            delete: true
        })
    })

    // app.use('/admin/api', router)
    app.use('/admin/api/rest/:resource', (req, res, next) => {
        // 这里因为前端的请求路径是小写负数, 而要搞动态CRUD的高级写法, 需要处理一下名字规范问题, 
        // models/Category.js 里面是首字母大写,单数文件名, 所以用 inflection 插件处理一下字符串
        const modelName =  require('inflection').classify(req.params.resource)
        // console.log('用插件转换后的路径', `../models/${modelName}`)
        // 最后挂载到req上面, 后面的处理函数就可以使用到了.
        req.Model = require(`../models/${modelName}`)

        next()
    }, router)




    const multer = require('multer')
    
    const upload = multer({dest: __dirname + '/../uploads'})

    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3020/uploads/${file.filename}`
        res.send(file)
    })
}