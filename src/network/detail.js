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

export function upLoadCommnet(id,name,comment) {
  return request({
    url : '/uploadcomment',
    params : {
      id,name,comment
    }
  })
}

export function giveStar(id) {
  return request({
    url : '/giveStar',
    params : {
      id
    }
  })
}