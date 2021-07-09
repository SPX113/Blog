<template>
  <div class="message">
    <el-divider content-position="left" class="title">
      <i class="el-icon-edit" style=""> 欢迎留言</i>
    </el-divider>
    <publishing @btnClick="uploadMessage"/>
    <message-display :message="message" ref="messageP"/>
    <el-pagination
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            @next-click="nextpage"
            @prev-click="prevpage"
            @current-change = "selectPage"
            :total="num">
    </el-pagination>
  </div>
</template>

<script>
  import Publishing from "components/content/publishing/Publishing";
  import MessageDisplay from "components/content/messageDisplay/MessageDisplay";

  import { notificationMixin } from "common/mixin"

  import { uploadMessage , getMessage } from "network/message";

  export default {
    name: "Message",
    mixins: [notificationMixin],
    data(){
      return{
        currentPage : 1,
        num : 0,
        message : [],
        readmore : true,
      }
    },
    components: {
      Publishing,MessageDisplay
    },
    methods: {
      getMessage(currentPage) {
        getMessage(currentPage).then(res => {
          this.message = res.data[0]
          this.num = res.data[1].totalpage
        })
      },
      uploadMessage(name, message) {
        uploadMessage(name, message).then(res => {
          this.success()
          this.getMessage(this.currentPage)
        },error => {
          this.error()
        })
      },

      //翻页
      prevpage(){
        this.currentPage --
        this.getMessage(this.currentPage)
      },
      nextpage(){
        this.currentPage ++
        this.getMessage(this.currentPage)
      },
      selectPage(value){
        this.currentPage = value
        this.getMessage(this.currentPage)
        document.querySelector("#app").scrollTop = 400
      }

    },
    created() {
      this.getMessage(this.currentPage)
    }
  }
</script>

<style scoped>
  .message{
    width: 75%;
    min-height: calc(100% - 61px);
    margin: 40px auto;
    border-radius: 8px;
    position: relative;
    bottom: 70px;
    z-index: 100;
  }
  .el-divider__text{
    background-color: rgb(238,237,237);
  }
  i{
    font-size: 18px;font-weight: 700;
  }
  .title{
    margin: 60px 0;
  }
  .el-pagination{
    text-align: center;
  }
</style>