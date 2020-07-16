<template>
  <div>
    <top :articleInfo="articleInfo"/>
    <div class="content">
      <div v-html="mdhtml" class="markdown-body" v-highlight ></div>
    </div>
  </div>
</template>

<script>
  import Top from "./childcomps/Top";
  import { getDetail , getArticle} from 'network/detail.js'
  import marked from 'marked'
  export default {
    name: "Detail",
    components:{
      Top
    },
    data(){
      return{
        articleInfo : {},
        article : '',
        mdhtml : ''
      }
    },
    created() {
      const id = this.$route.params.id
      getDetail(id).then(res => {
        this.articleInfo = res.data[0]

//数据处理
        //获取文章的文件名,获取文件信息
        this.article = this.articleInfo.article
        //标签从字符串转换为数组
        this.articleInfo.tags = this.articleInfo.tags.split(',')
        //时间处理
        this.articleInfo.createtime = this.articleInfo.createtime.substr(0,10)
      }).then(res =>{
        getArticle(this.article).then(res => {
          this.mdhtml = marked(res.data)
        })
      })
    }
  }
</script>

<style scoped>
  @import "~github-markdown-css/github-markdown.css";
  .content{
    background-color: white;
    width: 75%;
    margin: 0 auto;
    border-radius: 8px;
    position: relative;
    bottom: 70px;
    z-index: 100;
  }
  .markdown-body{
    padding: 40px 5%;
  }
</style>