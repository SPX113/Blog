import {request} from './request'

export function recommedArticle() {
  return request({
    url : '/recommedArticle'
  })
}

export function getArticleByPage(pageNo) {
  return request({
    url : '/allarticle',
    params:{
      pageNo
    }
  })

}

