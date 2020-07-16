import {request} from './request'

export function getDetail(id) {
  return request({
    url : '/article',
    params : {
      id
    }
  })
}

export function getArticle(article) {
  return request({
    url : '/mdsrc/' + article + '.md'
  })
}