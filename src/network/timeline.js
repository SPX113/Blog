import { request } from "./request";

export function getTimeLine() {
  return request({
    url : '/timeline'
  })
}