import axios from 'axios'

function request(config) {
    const instance = axios.create({
        baseURL : 'http://localhost:3000/',
        // baseURL : 'http://47.107.78.182:3000/',
        timeout : 5000,
        method : "post"
    })
    return instance(config)
}

export function upload(fd) {
    return request({
        url : '/commit',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        contentType : false,
        data : fd
    })
}