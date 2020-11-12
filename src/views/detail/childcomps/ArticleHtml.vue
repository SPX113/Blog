<template>
  <div>
    <div v-html="mdhtml" class="markdown-body" v-highlight >
    </div>
  </div>
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
  @import "~assets/css/github-markdown.css";
  .markdown-body{
    padding: 40px 5%;
  }
</style>