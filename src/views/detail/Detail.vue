<template>
  <div>
    <top :articleInfo="articleInfo"/>
    <div class="content">
      <article-html :mdhtml = "mdhtml" />
      <give-star  :islike="islike" @giveStar="giveStar"/>
      <el-divider content-position="left"><i class="el-icon-chat-dot-round" style="font-size: 18px;font-weight: 700"> 评论区</i></el-divider>
      <publishing @btnClick="commentSubmit" ref="commentsP" class="input" />
      <message-display :message="comments"/>
    </div>
    <suspend @starClick="giveStar" @toComments="toComments"
             :islike="islike" :stars="articleInfo.stars" :comments="articleInfo.comments" :menu="menu"/>
  </div>
</template>

<script>
  import Top from "./childcomps/Top";
  import Publishing from "components/content/publishing/Publishing"
  import ArticleHtml from "./childcomps/ArticleHtml";
  import GiveStar from "./childcomps/GiveStar";
  import MessageDisplay from "components/content/messageDisplay/MessageDisplay";
  import Suspend from "./childcomps/Suspend";

  import { notificationMixin } from "common/mixin";

  import { getDetail , getArticle , upLoadCommnet , getComments , giveStar} from 'network/detail.js'

  import marked from 'marked'

  export default {
    name: "Detail",
    components: {
      Top, ArticleHtml, Publishing, GiveStar,MessageDisplay,Suspend
    },
    mixins:[notificationMixin],
    data() {
      return {
        articleInfo: {},
        article: '',
        mdhtml: '',
        id: 0,
        comments : [],
        islike : false,
        menu : []
      }
    },
    watch:{
      mdhtml:{
        handler(){
          this.getMenu()
        }
      }
    },
    created() {
      //获取文章信息
      this.id = parseInt(this.$route.params.id)
      this.getDetail(this.id)
      this.getComments()
    },
    mounted() {
      //页面回顶
      this.$nextTick(() => {
        document.querySelector("#app").scrollTop = 0
      })



    },
    methods: {
      getDetail(id) {
        //根据id获取文章信息
        getDetail(this.id).then(res => {
          this.articleInfo = res.data

//数据处理
          //获取文章的文件名,获取文件信息
          this.article = this.articleInfo.article
          //标签从字符串转换为数组
          this.articleInfo.tags = this.articleInfo.tags.split(',')
          //时间处理
          this.articleInfo.createtime = this.articleInfo.createtime.substr(0, 10)
        }).then(res => {

          //获取文章的内容
          getArticle(this.article).then(res => {
            this.mdhtml = marked(res.data)
          })
        })
      },


      //评论
      commentSubmit(name, message) {
        upLoadCommnet(this.id, name, message).then(res => {
          this.success()
          this.getComments()
          this.articleInfo.comments ++
        }).catch(err => {
          this.error()
        })
      },
      //获取评论
      getComments() {
        getComments(this.id).then(res => {
          this.comments = res.data
        })
      },
      //给星星
      giveStar() {
        giveStar(this.id).then(res => {
          this.islike = true
        })
        this.articleInfo.stars++
      },
      //跳转到评论区
      toComments() {
        document.querySelector("#app").scrollTop = this.$refs.commentsP.$el.offsetTop + 240
      },


      //获取目录信息
      getMenu(){
        this.$nextTick(() => {
          document.querySelector(".markdown-body").querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(item =>{
            let obj = {
              id : item.id,
              level : parseInt(item.tagName.substr(1, 1)),
              body : item.innerHTML
            }
            this.menu.push(obj)
          })
        })
      }



    }
  }
</script>

<style scoped>
  .content{
    background-color: white;
    width: 75%;
    margin: 0 auto;
    border-radius: 8px;
    position: relative;
    bottom: 70px;
    z-index: 100;
  }
  .input{
    padding: 40px 20px 0;
  }
</style>