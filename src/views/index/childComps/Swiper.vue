<template>
  <div class="swiper">
    <el-carousel height="380px" indicator-position="none">
      <el-carousel-item v-for="(item,index) in recArticle" :key="index" @click.native="itemClick(item.id)">
        <div class="content">
          <el-image :src="item.photo" fit="fill" class="image"></el-image>
          <div class="info">
            <div class="blog-info">
              <div class="title">{{item.title}}</div>
              <div class="tags">
                <el-tag type="info" v-for="(tage,index) in item.tags" :key="index">{{tage}}</el-tag>
              </div>
              <div class="time">
                {{item.updatetime | updatetime}}
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props:{
      recArticle:{
        type : Array,
        default(){
          return []
        }
      }
    },
    filters:{
      updatetime(data){
        return data.substr(0,10)
      }
    },
    methods:{
      itemClick(id){
        this.$router.push('/detail/' + id)
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: rgb(238,237,237);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: rgb(238,237,237);
  }
  .content{
    display: flex;
  }
  .image{
    height: 380px;
    width: 55%;
    border-top-right-radius: 10px;
  }
  .info{
    height: 380px;
    flex: 1;
    justify-content: space-between;
  }
  .blog-info{
    text-align: left;
    height: 50%;
    width: 60%;
    margin: auto;
    position: relative;
    bottom: -10%;
  }
  .title{
    padding-top: 20px;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .tags{
    margin-top: 20px;
  }
  .time{
    margin-top: 10px;
  }
  .el-tag{
    color: black;
  }
</style>