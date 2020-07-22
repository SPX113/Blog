<template>
  <div class="control">
    <div class="menu">
      <el-popover
              placement="left"
              width="250"
              trigger="hover">
        <div class="contain">
          <p v-for="(item,index) in menu" :key="index"  :style="menulist(item.level)" @click="jump(item.id)">
            {{item.body}}
          </p>
        </div>
        <i slot="reference" class="el-icon-notebook-2"></i>
      </el-popover>
      <p>menu</p>
    </div>
    <div class="star" :class="{active : islike}">
      <i class="el-icon-star-off" @click.once="giveStar" ></i>
      <p>{{stars}}</p>
    </div>
    <div class="comments" @click="toComments">
      <i class="el-icon-chat-dot-round"></i>
      <p>{{comments}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Suspend",
    props:{
      islike:{
        type : Boolean,
        default : false
      },
      stars:{
        type: Number,
        default: 0
      },
      comments:{
        type: Number,
        default : 0
      },
      menu:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      giveStar(){
        if(!this.islike) {
          this.$emit('starClick')
        }
      },
      toComments(){
        this.$emit('toComments')
      },


      menulist(titleLevel) {  //根据标题的level决定样式,level越小标题越大
        let maxLevel = 6   //先弄个最小的6
        this.menu.forEach(item => {   //找出最大的level
          if(item.level < maxLevel) {
            maxLevel = item.level
          }
        })
        let minus = titleLevel - maxLevel  //计算当前标题的level与最大level的差值
        return {
          'margin-left': minus + 'rem'
        }
      },


      jump(idname){
        document.querySelector('#'+idname).scrollIntoView(true);
      }


    }
  }
</script>

<style scoped>
  .control{
    position: fixed;
    background-color: #fff;
    top: 35%;
    right: 4px;
    padding: 10px;
    display: flex;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .control i{
    font-size: 30px;
    cursor: pointer;
  }
  .control div{
    margin: 5px 0;
  }
  .active{
    color: red;
  }
  .el-popover p{
    color: black;
    font-size: 17px;
    border-radius: 8px;
    padding-left: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
  .el-popover p:hover{
    color: white;
    background-color: rgb(255, 187, 0);
  }
  .contain{
    max-height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
  }

</style>