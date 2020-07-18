<template>
  <div class="comments">
    <el-divider content-position="left"><i class="el-icon-chat-dot-round" style="font-size: 18px;font-weight: 700"> 评论区</i></el-divider>
    <div class="display">
      <form action="" method="get" >
        <el-input
                type="text"
                placeholder="请输入昵称（必填） "
                v-model="name"
                maxlength="10"
                show-word-limit
                style="width: 30%"
                name = "name"
                ref="name"
        >
        </el-input>
        <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="message"
                maxlength="100"
                show-word-limit
                name = "message"
                ref = "message"
        >
        </el-input>
        <div class="btncontain">
          <el-button type="button" @click="btnClick" icon="el-icon-edit">评论</el-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


  export default {
    name: "Comments",
    data(){
      return{
        name : '',
        message : ''
      }
    },
    methods:{
      warning(){
        this.Notification({
          title: '警告',
          message: '输入框不能为空',
          type: 'warning',
          position : 'bottom-right'
        })
      },
      btnClick(){
        if (this.name === ''){
          this.warning()
          return this.$refs.name.focus()
        }
        if(this.message === ''){
          this.warning()
          return this.$refs.message.focus()
        }
        this.$emit('btnClick',this.name,this.message)
        //输入框重置
        this.name = ''
        this.message = ''
      }
    }
  }
</script>

<style scoped>
  .comments{
    padding: 40px 0;
  }
  .display{
    padding: 20px 5%;
  }
  .el-input{
    padding: 20px 0;
  }
  .btncontain{
    width: 100%;
    padding: 10px 0;
    text-align: right;
  }
</style>