import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3020/admin/api'
})


export default http