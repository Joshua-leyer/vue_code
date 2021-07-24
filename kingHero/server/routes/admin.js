

module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    // require('express-async-errors');

    const AdminUser = require('../models/AdminUser')

    const router = express.Router({
        mergeParams: true
    })

    // const Category = require('../models/Category')

    /**
     * @创建资源
     * axois post
     */
    router.post('/', async (req, res) => {
        // const Model = require(`../models/${req.params.resource}`)
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    /**
     * @资源列表
     */
    router.get('/', async (req, res) => {
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
     * @put 修改更新资源
     */
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        console.log('put接口接受到的数据是', req.body)
        res.send(model)
    })

    /**
     * @delete 删除资源
     */
    router.delete('/:id', async (req, res) => {
        console.log('get delete function')
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            delete: true
        })
    })



    const authMiddleware = async (req, res, next) => {
        // console.log(req.headers.authorization)
        // js基础数据类型操作 , 
        const token = String( req.headers.authorization || '').split(' ').pop()
        // ??? > 这里, assert 捕获错误, 有点不太理解. 原理是什么.
        assert(token, 401, '没有找到token , 请尝试重新登录')
        const { id } = jwt.verify(token, app.get('secret'))
        assert(id, 401, '无效的token,尝试重新登录')
        // console.log(id)
        req.user = await AdminUser.findById(id)
        // console.log(req.user)
        assert(req.user, 401, '请先登录')
        next() 
    }

    // app.use('/admin/api', router)
    app.use('/admin/api/rest/:resource', authMiddleware, (req, res, next) => {
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

    app.post('/admin/api/upload', authMiddleware, upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3020/uploads/${file.filename}`
        res.send(file)
    })



    app.post('/admin/api/login', async (req, res) => {
        const { username, password } = req.body
        // 找
        const AdminUser =  require(`../models/AdminUser`)
        // 这里是个知识点. 前面为了直接就是不传输给前端查看到密码,索性就添加了select: false 字段. 
        // 但是这里校验密码需要, 所以就多一个select()
        const user = await AdminUser.findOne({username: username}).select('+password')

        assert(user, 422, '用户名不存在') //版本问题, 我这里报, 不能捕获promise的异常错误
        // 等效下面的 if 判断
        // if (!user) {
        //     return res.status(422).send({
        //         message: '用户不存在'
        //     })
        // }

        // 改用 express-async-errors 中间件
        if (!user) throw Error('用户名不存在')


        // 校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        if (!isValid) {
            return res.status(422).send({
                message: '密码错误'
            })
        }
        // 返回token
        // const jwt = require('jsonwebtoken')
        // 签名
        const token = jwt.sign({ id: user._id }, app.get('secret'))
        res.send({token})
    })

    // 错误处理函数
    app.use( async (err, req, res, next) => {
        console.log('错误处理函数 err is', err)

        // assert不能用
        res.status(err.statusCode || 500).send({
            message: err.message
        })

        // if (err.message === '用户名不存在') {
        //     res.status(422)
        //     res.json({ error: err.message })
        // }
        
        next(err)
    })

}

