import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL : 'http://localhost:3030/',
    baseURL : 'http://81.71.19.94:3030/',
    timeout : 5000
  })
  return instance(config)
}
