import {request} from './request'

export function getDetail(name) {
  return request({
    url : '/mdsrc/'+ name + '.md'
  })

}