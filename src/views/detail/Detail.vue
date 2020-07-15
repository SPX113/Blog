<template>
  <div>
    <div v-html="article" class="markdown-body" v-highlight></div>
  </div>
</template>

<script>
  import {getDetail} from 'network/detail.js'
  import marked from 'marked'
  export default {
    name: "Detail",
    data(){
      return{
        article : ''
      }
    },
    created() {
      const name = this.$route.params.name
      console.log(name)
      getDetail(name).then(res => {
       this.article = marked(res.data)
      })
    }
  }
</script>

<style scoped>
  @import "~github-markdown-css/github-markdown.css";

</style>