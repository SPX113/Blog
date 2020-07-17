<template>
  <div>
    <top :articleInfo="articleInfo"/>
    <div class="content">
      <article-html :mdhtml = "mdhtml"/>
      <give-star/>
      <comments :id="id"/>
    </div>
  </div>
</template>

<script>
  import Top from "./childcomps/Top";
  import Comments from "./childcomps/Comments";
  import ArticleHtml from "./childcomps/ArticleHtml";
  import GiveStar from "./childcomps/GiveStar";

  import { getDetail , getArticle} from 'network/detail.js'
  import marked from 'marked'
  export default {
    name: "Detail",
    components:{
      Top,ArticleHtml,Comments,GiveStar
    },
    data(){
      return{
        articleInfo : {},
        article : '',
        mdhtml : '',
        id : 0
      }
    },
    created() {
      this.id = parseInt(this.$route.params.id)
      getDetail(this.id).then(res => {
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
    },
    mounted(){
      //页面回顶
      this.$nextTick(() => {
        document.querySelector("#app").scrollTop = 0
      })
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
</style>