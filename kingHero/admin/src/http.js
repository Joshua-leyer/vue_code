import axios from 'axios'
import Vue from 'vue'
import router from './router/index.js'

const http = axios.create({
    baseURL: 'http://localhost:3020/admin/api'
})


// 请求前，做一个拿token操作.

http.interceptors.request.use( function(config) {
    console.log('axois interceptros request is', config)
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }

    return config
}, function(error) {
    console.log('req interceptors', error)
    return Promise.reject(error)
})



// 这里可以看一下 axios 官网对拦截器的讲解 , 如果返回的状态不是200的范围, 就会进入这个 err 函数
http.interceptors.response.use( res => {
    return res
}, err => {
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: 'error',
            duration: 1224,
            message: err.response.data.message
        })
    }

    // 前后端要去约定的
    if (err.response.status === 401) {
        router.push('/login')
        console.log('401')
    }
    // console.log(err.response.data.message)
    return Promise.reject(err)
})


export default http