import {request} from './request'

export function uploadMessage(name,message) {
  return request({
    url : '/uploadmessage',
    params : {
      name,message
    }
  })
}

export function getMessage(page) {
  return request({
    url : '/getmessage',
    params : {
      page
    }
  })
}