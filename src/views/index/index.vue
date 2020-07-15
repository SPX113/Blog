<template>
  <div class="index">
    <swiper :recArticle = "recArticle"/>
    <article-list/>
  </div>
</template>

<script>
  import Swiper from "./childComps/Swiper";
  import ArticleList from "./childComps/ArticleList";

  import {recommedArticle} from "../../network/home";
  export default {
    name: "index",
    components:{
      Swiper,ArticleList
    },
    data(){
      return {
        recArticle : []
      }
    },
    created() {
      recommedArticle().then(res => {
        this.recArticle = res.data
        console.log(this.recArticle)
      })
    }
  }
</script>

<style scoped>

</style>