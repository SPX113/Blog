<template>
  <div class="content">
    <div class="list-item" v-for="(item,index) in articleList" :key="index" @click="itemClick(item.id)">
      <div class="info">
        <h2>{{item.title}}</h2>
        <div class="tag">
          <el-tag type="info" v-for="(tag,index) in item.tags" :key="index">{{tag}}</el-tag>
        </div>
        <p>{{item.describe}}</p>
        <div class="footer">
          <span>{{ item.createtime | formatetime }}</span>
          <ul>
            <li><i class="el-icon-view"> {{item.watches}}</i></li>
            <li><i class="el-icon-chat-dot-round"> {{item.comments}}</i></li>
            <li><i class="el-icon-star-off"> {{item.stars}}</i></li>
          </ul>
        </div>
      </div>
      <div class="image">
        <el-image :src="item.photo" fit="fill" class="photo" style="height: 250px;border-radius: 8px;" lazy/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "ArticleList",
    props:{
      articleList:{
        type : Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(id){
        this.$router.push('/detail/'+ id)
      }
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
  .image{
    width: 100%;
  }
  .photo{
    transition: all .3s linear;
    width: 100%;
  }
  .list-item:hover  .photo{
    transform:scale(1.04);
  }
  .el-tag{
    margin-right: 10px;
    color: black;
  }


</style>