<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="d-flex"
                 mode="horizontal" :router="true" type="flex">
            <el-menu-item class="mr-auto">SPX</el-menu-item>
            <el-menu-item index="/index" >首页</el-menu-item>
            <el-menu-item index="/timeline">时间线</el-menu-item>
            <el-menu-item index="/message">留言板</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '/index'
            };
        },
        methods: {
        }
    }
</script>

<style scoped>
    .nav{
        position: sticky;
        top: 0px;
        z-index: 10001;
        height:61px;
    }
    .el-menu-item{
        font-size: 1.1rem;
    }
    .d-flex{
        display: flex!important;
    }
    .mr-auto{
        margin-right: auto!important;
    }
    .align-items-center{
        align-items: center!important;
    }
</style>