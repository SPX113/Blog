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
    },
    mounted(){
        setTimeout(function () {
            let codeList = document.getElementsByTagName('pre')
            for (let i = 0; i < codeList.length;i++){
                let targetCode = codeList[i]
                let copy = document.createElement('button')
                copy.innerHTML = "复制"
                copy.style.cssText = "color:black;background-color:white;width:3rem;text-align:center;" +
                    "border-radius:3px;float:right;border:none;cursor:pointer"
                copy.onclick = function(){
                  try{
                    const input = document.createElement("input")
                    let value = targetCode.children[1].innerText
                    input.value = value
                    document.body.append(input)
                    input.select()
                    document.execCommand('copy')
                    input.remove()
                    alert("复制成功")
                  }catch (e) {
                    alert("复制失败,浏览器不兼容")
                  }
                }
                targetCode.insertBefore(copy,targetCode.firstChild)
            }
        },300)







    }
  }
</script>

<style scoped>
  @import "~assets/css/github-markdown.css";
  .markdown-body{
    padding: 40px 5%;
  }
</style>