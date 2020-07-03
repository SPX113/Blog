<template>
  <div class="about">
    <div class="left">
      <el-card shadow="hover" class="box-card">
        <div slot="header" class="clearfix">
          <span>简介</span>
        </div>
        <div class="text item" v-for="(item,index) in list" :key="index">
          {{item}}
        </div>
      </el-card>
    </div>
    <div class="right">
      <el-card shadow="hover" class="box-card">
        <div class="text item">
          <img src="~assets/img/head.jpg" class="photo">
        </div>
        <div class="info">
          <p>SPX</p>
          <P> 肇庆学院</P>
          <p class="my">因为你不会，所以你才会  ----千层饼</p>
          <div class="link">
            <ul>
              <li><a href="https://github.com/SPX113"><i class="iconfont icon-github"></i></a></li>
              <li>
                <el-tooltip class="item" effect="dark" content="SPX_11-13" placement="bottom">
                  <i class="iconfont icon-weixin"></i>
                </el-tooltip>
              </li>
              <li>
                <el-tooltip class="item" effect="dark" content="1137893057@qq.com" placement="bottom">
                  <i class="iconfont icon-youxiang"></i>
                </el-tooltip>
              </li>
            </ul>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About",
    data(){
      return{
        list:['准大四学生','拖延癌晚期患者','资深嘴强王者','不懂装懂第一人','睡王','精神小伙']
      }
    }
  }
</script>

<style scoped>
  .about{
    display: flex;
    justify-content: center;
  }
  .text {
    font-size: 16px;
    font-weight: bold;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .photo{
    border-radius: 50%;
    width: 150px;
  }
  .right .item{
    text-align: center;
  }
  .info{
    text-align: center;
    font-size: 18px;
  }
  .my{
    font-weight: bold;
  }
  .right .box-card{
    width: 400px;
    margin-left: 50px;
  }
  a{
    text-decoration: none;
  }
  .icon img{
    width: 30px;
    height: 30px;
    padding: 10px 10px;
  }
  .link{
    padding-top: 10px;
  }
  .link li{
    display: inline;
    padding: 10px;
  }
  .iconfont{
    font-size: 30px;
    color: black;
  }
</style>