<template>
    <div class="box">
        <footer class="footer">
            <div class="footer-top">
                <div class="container">
                        <div class="left">
                            <div class="single-widget about">
                                <div class="footer-logo">
                                    <h2>SPX</h2>
                                </div>
                                <p>因为你不会，所以你才会。</p>
                                <div class="button">
                                    <el-button type="text" style="font-size: 18px" @click="tiaozhuan">About me</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="center">
                            <div class="single-widget">
                                <h2>相关链接</h2>
                                <ul class="social-icon">
                                    <li class="active"><a href="javascript:void(0)"><i class="el-icon-s-order"></i>博文</a></li>
                                    <li class="active"><a href="javascript:void(0)"><i class="el-icon-s-comment"></i>留言</a></li>
                                    <li class="active"><a href="javascript:void(0)"><i class="el-icon-s-cooperation"></i>资源</a></li>
                                    <li class="active"><a href="javascript:void(0)"><i class="el-icon-s-flag"></i>日记</a></li>
                                    <li class="active"><a href="javascript:void(0)"><i class="el-icon-s-promotion"></i>归档</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="right">
                            <div class="single-widget contact">
                                <h2>联系我</h2>
                                <ul class="list">
                                    <li><i class="el-icon-coordinate"></i>地址: 广东省东莞市中堂镇</li>
                                    <li><i class="iconfont icon-youxiang"></i>邮箱: 1137893057@qq.com</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            <div class="copyright">
                    <p style="text-align: center">暂未备案</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "FooterBar",
        methods:{
             tiaozhuan() {
                this.$router.push('/about');
            }
        }
    }
</script>

<style scoped>
    a{text-decoration: none}
    li{list-style: none}
    .footer .container{width:90%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}
    .footer .footer-top{background:#232328;padding:60px 0 90px}
    .footer .single-widget{margin-top:30px}
    .footer .footer-logo{margin-bottom:20px}
    .footer .single-widget h2{color:#fff;font-size:18px;margin-bottom:20px;text-transform:uppercase}
    .footer .about p{color:#eee}
    .footer .contact ul li{color:#eee;position:relative;padding-left:40px;font-family:Roboto,sans-serif;margin-bottom:10px}
    .footer .contact ul li:last-child{margin:0}
    .footer .contact ul li i{position:absolute;top:50%;width:30px;height:30px;text-align:center;line-height:30px;left:0;margin-top:-15px;font-size:16px}
    .footer .contact ul li a{color:#fff}
    .footer .social-icon li{float:left;width:50%;margin-bottom:10px}
    .footer .social-icon li:last-child{margin:0}
    .footer .social-icon li a{color:#eee}
    .footer .social-icon li a:hover{color:#82B440}
    .footer .social-icon li a i{margin-right:10px;width:20px;font-size:16px}
    .footer .copyright{padding:12px 0;background:#1D1D21}
    .footer .copyright p{color:#bbb;font-size:14px}
    .container{
        display: flex;
    }
    .left,.center,.right{
        flex: 1;
    }
</style>