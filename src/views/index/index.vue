<template>
  <div class="index">
    <swiper :recArticle = "recArticle"/>
    <article-list :articleList="articleList" ref="list"/>
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
  import ArticleList from "components/content/articleList/ArticleList";

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
        totalpages: 0,
        offset : 0
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
          this.totalpages = res.data.totalnum
          this.articleList = res.data.result
          for (let i of this.articleList) {
            i.tags = i.tags.split(',')
          }
        })
      },


      //翻页
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
        this.$nextTick(()=>{
          document.querySelector("#app").scrollTop = this.$refs.list.$el.offsetTop
        })

      }
    },


    created()
    {
      this.getrecommend()
      this.getByPage(this.currentPage)

    },

    activated() {
      document.querySelector("#app").scrollTop = this.offset
    },
    deactivated(){
      this.offset = document.querySelector("#app").scrollTop
    }
  }
</script>

<style scoped>
  .el-pagination{
    text-align: center;
    padding-bottom: 40px;
  }
</style>