import { Notification} from "element-ui";

export const notificationMixin = {
  methods:{
    warning(){
      Notification({
        title: '警告',
        message: '输入框不能为空',
        type: 'warning',
        position : 'bottom-right'
      })
    },
    success(){
      Notification({
        title: '发布成功',
        message: '已成功发布一条评论',
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