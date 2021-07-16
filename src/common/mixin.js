import { Notification} from "element-ui";

export const notificationMixin = {
  methods:{
    warning(mess = "输入框不能为空"){
      Notification({
        title: '警告',
        message: mess,
        type: 'warning',
        position : 'bottom-right'
      })
    },
    success(mess = "已成功发布一条评论"){
      Notification({
        title: '发布成功',
        message: mess,
        type: 'success',
        position: 'bottom-right'
      })
    },
    error(){
      Notification({
        title: '错误',
        message: '服务器异常,请联系管理员',
        type: 'error',
        position: 'bottom-right'
      })
    }
  }
}