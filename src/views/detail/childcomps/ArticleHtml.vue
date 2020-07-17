<template>
  <div v-html="mdhtml" class="markdown-body" v-highlight ></div>
</template>

<script>
  export default {
    name: "ArticleHtml",
    props:{
      mdhtml : {
        type : String,
        default : ''
      }
    }
  }
</script>

<style scoped>
  @import "~github-markdown-css/github-markdown.css";
  .markdown-body{
    padding: 40px 5%;
  }
</style>