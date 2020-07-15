# Vue 引用 .md 文件，解析 markdown 语法

### 前言

想了一晚上，想不明白怎么在不影响文章自由度的情况下，储存在数据库中，并导出渲染。后来发现了这一种方法，通过解析md语法生成html.



### 安装的依赖

`npm i html-loader markdown-loader --save-dev`



### vue.config.js 配置

```javascript
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    }
}
```



#### 模板使用例子

```javascript
<template>
  <div>
    <div v-html="md">
             
    </div>
  </div>
</template>
 
<script>
import demo from "../../assets/demo.md";
 
console.log(demo)
 
export default {
  data() {
    return {
      md:demo
    };
  }
};
</script>
 
<style lang="less" scoped>
// 这里可以约束解析出来后的 markdown 标签样式，如设置 h3{...}
    //引用样式
    @import "~github-markdown-css/github-markdown.css"
</style>
```



### github-markdown 样式下载

` npm install github-markdown-css`



### 总结

路漫漫其修远兮，吾将上下而求索。