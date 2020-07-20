<template>
  <div class="comments">
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
                @keyup.enter="btnClick"
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

  import {notificationMixin} from "common/mixin";

  export default {
    name: "Publishing",
    data(){
      return{
        name : '',
        message : ''
      }
    },
    mixins:[notificationMixin],
    methods:{
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
  .display{
    padding: 0 5%;
  }
  .el-input{
    padding-bottom: 20px;
  }
  .btncontain{
    width: 100%;
    padding: 10px 0;
    text-align: right;
  }
</style>