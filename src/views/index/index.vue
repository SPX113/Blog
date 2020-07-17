<template>
  <div class="index">
    <swiper :recArticle = "recArticle"/>
    <article-list :articleList="articleList" />
      <el-pagination
              background
              layout="prev, pager, next"
              :current-page="currentPage"
              @next-click="nextpage"
              @prev-click="prevpage"
              @current-change = "selectPage"
              :total="totalpages">
      </el-pagination>

  </div>
</template>

<script>
  import Swiper from "./childComps/Swiper";
  import ArticleList from "./childComps/ArticleList";

  import {recommedArticle,getArticleByPage} from "../../network/home";
  export default {
    name: "index",
    components: {
      Swiper, ArticleList
    },
    data() {
      return {
        recArticle: [],
        currentPage: 1,
        articleList: [],
        totalpages: 0
      }
    },
    methods: {
      //获取推荐数据
      getrecommend() {
        recommedArticle().then(res => {
          this.recArticle = res.data
          for (let i of this.recArticle) {
            i.tags = i.tags.split(',')
          }
        })
      },
      //获取当前页数据
      getByPage(currentPage) {
        getArticleByPage(currentPage).then(res => {
          console.log(res)
          this.totalpages = res.data.totalnum
          this.articleList = res.data.result
          for (let i of this.articleList) {
            i.tags = i.tags.split(',')
          }
        })
      },
      prevpage(){
        this.currentPage --
        this.getByPage(this.currentPage)
      },
      nextpage(){
        this.currentPage ++
        this.getByPage(this.currentPage)
      },
      selectPage(value){
        this.currentPage = value
        this.getByPage(this.currentPage)
      }
    },
    created()
    {
      this.getrecommend()
      this.getByPage(this.currentPage)
    }
  }
</script>

<style scoped>
  .el-pagination{
    text-align: center;
  }
</style>