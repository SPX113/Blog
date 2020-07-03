<template>
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
</template>

<script>
  export default {
    name: "Right"
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
    font-weight: bold;
  }

  .item {
    margin-bottom: 18px;
    text-align: center;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card{
    width: 400px;
    margin-left: 50px;
  }
  .photo{
    border-radius: 50%;
    width: 150px;
  }
  .info{
    text-align: center;
    font-size: 18px;
  }
  .my{
    font-weight: bold;
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