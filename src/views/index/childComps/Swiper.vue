<template>
  <div class="swiper">
    <el-carousel height="380px" indicator-position="none">
      <el-carousel-item >
        <div class="content">
          <el-image :src="require('@/assets/img/head.jpg')" fit="cover" class="image"></el-image>
          <div class="info">
            <div class="blog-info">
              <div class="title">正在搭建一个Blog的页面,yayayyaya</div>
              <div class="tag">
                <el-tag type="info">标签三</el-tag>
              </div>
              <div class="time">
                time
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
    name: "Swiper"
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
  }
  .blog-info{
    text-align: left;
    height: 50%;
    width: 60%;
    margin: auto;
    position: relative;
    bottom: -15%;
  }
  .title{
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>