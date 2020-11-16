<template>
    <div class="music-bar">
        <div class="container">
            <audio :src="song[currentIndex].url" ref="music"
                   @canplay="getDuration"
                   @timeupdate="getCurrentTime"
                   @ended="isEnded"
            >
            </audio>
            <div class="control">
                <i class="iconfont icon-SanMiAppglyphico" @click="preMusic">
                </i>
                <i :class="stateClass" @click="playClick"></i>
                <i class="iconfont icon-SanMiAppglyphico1" @click="nextMusic"></i>
            </div>
            <div class="photo">
                <img src="~assets/img/head.jpg" width="60px" height="60px">
            </div>
            <div class="detail">
                <div class="top">
                    <p>{{song[currentIndex].title}}</p>
                </div>
                <div class="bottom">
                    <div class="Process">
                        <div class="ProcessAll" @click="changeProcess" :style="'width:'+processWidth+'px'"></div>
                        <div class="ProcessNow" ref="now" @click="changeProcess"></div>
                        <div class="SongTime">
                            <div class="time">
                                {{currentTime | mmss }}/{{duration | mmss}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu">
                <i class="iconfont icon-SanMiAppglyphico4" @click="show"></i>
            </div>
        </div>
        <div class="list" v-show="isShow">
            <p v-for="(item,index) in song" :key="index" @click="change(index)">
                {{item.title}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicBox",
        data(){
            return{
                isPlay : false,
                duration : 0,
                currentTime: 0,
                processWidth : 260,
                currentIndex:0,
                isShow: false,
                song:[
                    {title:'一丝不挂-陈奕迅',url:require('@/assets/一丝不挂.mp3')},
                    {title:'一路向北-周杰伦',url:require('@/assets/一路向北.mp3')},
                    {title:'晴天-周杰伦',url:require('@/assets/晴天.mp3')},
                    {title: '麻雀-李荣浩',url:require('@/assets/麻雀.mp3')},
                    {title: '体面-于文文',url:require('@/assets/体面.mp3')},
                    {title: '像鱼-王贰浪',url:require('@/assets/像鱼.mp3')},
                    {title: '飞鸟和蝉-任然',url: require('@/assets/飞鸟和蝉.mp3')}
                ]
            }
        },
        watch:{
            currentTime :'Playing'
        },
        filters:{
            //进度条时间格式化
          mmss(time){
              let data = parseInt(time)
              let mm = parseInt(data/60)
              let ss = parseInt(data%60)
              mm = mm<=9 ? '0'+mm : mm
              ss = ss<=9 ? '0'+ss : +ss
              return mm+":"+ss
          }
        },
        computed:{
            //播放暂停按钮切换
            stateClass(){
                if(this.isPlay){
                    return "iconfont icon-tingzhi"
                }else{
                    return "iconfont icon-yinle-bofang"
                }
            }
        },
        methods:{
            show(){
              this.isShow = ! this.isShow
            },
            change(index){
                this.currentIndex = index
                this.isShow = false
                this.$refs.music.load()
                setTimeout(()=>{
                    this.play()
                },500)
            },
            //音乐播放
            play(){
                this.isPlay = true
                this.$refs.music.play()
            },
            //音乐暂停
            pause(){
                this.isPlay = false
                this.$refs.music.pause()
            },
            //播放暂停按钮点击事件
            playClick(){
                if (!this.isPlay){
                    this.play()
                }else{
                    this.pause()
                }
            },
            //获取音乐文件总时长
            getDuration(){
                this.duration = this.$refs.music.duration
            },
            //获取当前音乐播放时间
            getCurrentTime(){
                this.currentTime = this.$refs.music.currentTime
            },
            //音乐结束钩子函数触发事件
            isEnded(){
                this.nextMusic()
            },
            //播放时运行
            Playing(){
                this.process()
            },
            //进度条变换
            process(){
                this.$refs.now.style.width = (this.currentTime/this.duration)*this.processWidth + 'px'
            },
            //进度条点击时间点
            changeProcess(event){
                //获取事件相对于元素的x轴
                let clickX = event.offsetX
                this.$refs.music.currentTime = (clickX/this.processWidth)*this.duration
                if(this.isPlay){
                    this.play()
                }
            },
            //上一首
            preMusic(){
                if(this.currentIndex == 0){
                    this.currentIndex = this.song.length-1
                }else{
                    this.currentIndex--
                }
                this.$refs.music.load()
                setTimeout(()=>{
                    this.play()
                },500)
            },
            //下一首
            nextMusic(){
                if(this.currentIndex == this.song.length-1){
                    this.currentIndex = 0
                }else{
                    this.currentIndex++
                }
                this.$refs.music.load()
                setTimeout(()=>{
                    this.play()
                },500)
            },

        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        position: fixed;
        bottom: 0;
        height: 70px;
        width: 670px;
        z-index: 100;
        background-color: rgba(250,250,250,.9);
        border-bottom-right-radius: 8px;
        border-top-right-radius:8px;
    }
    .control{
        line-height: 70px;
    }
    .photo{
        width: 70px;
    }
    .photo img{
        position: relative;
        top:5px;
        left:10px;
    }
    .detail{
        width: 377px;
    }
    .container i{
        font-size: 35px;
        color: rgb(39,192,135);
        cursor: pointer;
        padding:0 8px;
    }
    .container i:hover{
        color: rgb(60,210,140);
    }
    .top{
        height: 40px;
        position: relative;
        top:7px
    }
    .bottom{
        height: 30px;
    }
    .top p{
        width: 100%;
        text-align: center;
        line-height: 40px;
        font-weight: bold;
    }

    .Process{
        margin-top: 10px;
        margin-left: 15px;
    }
    .ProcessAll{
        float: left;
        height: 3px;
        cursor: pointer;
        background-color:rgba(0,0,0,0.2);
    }
    .ProcessNow{
        width: 0px;
        float: left;
        position: absolute;
        height: 3px;
        cursor: pointer;
        background-color:#f06d6a;
    }
    .SongTime{
        float: right;
        font-size: 14px;
        color:rgba(0,0,0,0.5);
        padding-right: 10px;
        position: relative;
        top: -10px;
    }
    .menu{
        flex: 1;
        text-align: center;
        line-height: 70px;
    }
    .list{
        position: fixed;
        bottom: 0;
        left: 670px;
        z-index: 100;
        max-height: 500px;
        width: 300px;
        background-color: rgba(39,192,135,.9);
        border-radius: 8px;
        padding:10px 0;
    }
    .list p{
        font-weight: bolder;
        text-align: center;
        color: white;
        cursor: pointer;
        padding: 2px 0;
    }
    .list p:hover{
        color: rgba(39,192,135,.9);
        background-color: #fff;
    }
</style>