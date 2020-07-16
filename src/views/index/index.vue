<template>
  <div class="index">
    <swiper :recArticle = "recArticle"/>
    <article-list :articleList="articleList" />
  </div>
</template>

<script>
  import Swiper from "./childComps/Swiper";
  import ArticleList from "./childComps/ArticleList";

  import {recommedArticle,getArticleByPage} from "../../network/home";
  export default {
    name: "index",
    components:{
      Swiper,ArticleList
    },
    data(){
      return {
        recArticle : [],
        pageNo : 1,
        articleList : []
      }
    },
    created() {
      recommedArticle().then(res => {
        this.recArticle = res.data
        for(let i of this.recArticle){
            i.tags = i.tags.split(',')
        }
      })
        getArticleByPage(this.pageNo).then(res => {
          this.articleList = res.data
          console.log(this.articleList)
          for(let i of this.articleList){
            i.tags = i.tags.split(',')
          }

        })
      }
  }
</script>

<style scoped>

</style>