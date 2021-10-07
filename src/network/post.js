import axios from 'axios'

function request(config) {
    const instance = axios.create({
        // baseURL : 'http://localhost:3030/',
        baseURL : 'http://81.71.19.94:3030/',
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