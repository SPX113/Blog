import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL : 'http://localhost:3000/',
    baseURL : 'http://47.107.78.182:3000/',
    timeout : 5000
  })
  return instance(config)
}
