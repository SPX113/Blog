<template>
  <div class="content">
    <div class="list-item" v-for="(item,index) in 6" :key="index">
      <div class="info">
        <h2>flex布局中的flex-basis,flex-grow,flex-shrink到底咋回事儿?</h2>
        <div class="tag">
          <el-tag type="info">标签三</el-tag>
        </div>
        <p>描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下描述一下</p>
        <div class="footer">
          <span>2020-06-16</span>
          <ul>
            <li><i class="el-icon-view">20</i></li>
            <li><i class="el-icon-chat-dot-round">10</i></li>
            <li><i class="el-icon-star-off">5</i></li>
          </ul>
        </div>
      </div>
      <div class="image">
        <el-image src="http://localhost:3000/img/sanzhi.jpg" fit="fill" class="photo" style="height: 250px;border-radius: 8px"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleList"
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
  .list-item{
    display: flex;
    border-radius: 8px;
    height: 250px;
    margin: 10px 0;
    padding: 10px;
    transition: all .3s linear;
  }
  .info{
    flex: 1;
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .image{
    border-radius: 8px;
    flex: 1;
  }
  .footer ul{
    list-style-type: none;
    display: inline;
    float: right;
  }
  .footer li{
    display: list-item;
    float: left;
    margin-left: 10px;
  }
  .list-item:hover{
    box-shadow: 0 0 15px rgb(150,150,150);
  }
  .photo{
    transition: all .3s linear;
  }
  .list-item:hover  .photo{
    transform:scale(1.04);
  }



</style>