<template>
    <div class="container">
        <audio src="~assets/一路向北.mp3" ref="music"
               @canplay="getDuration"
               @timeupdate="getCurrentTime"
               @ended="isEnded"
        >

        </audio>
        <div class="control">
            <i class="iconfont icon-SanMiAppglyphico"></i>
            <i :class="stateClass" @click="playClick"></i>
            <i class="iconfont icon-SanMiAppglyphico1"></i>
        </div>
        <div class="photo"></div>
        <div class="detail">
            <div class="top">
                <p>一路向北-周杰伦</p>
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
    </div>
</template>

<script>
    export default {
        name: "MusicBox",
        data(){
            return{
                isPlay : true,
                duration : 0,
                currentTime: 0,
                processWidth : 260
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
                    return "iconfont icon-yinle-bofang"
                }else{
                    return "iconfont icon-tingzhi"
                }
            }
        },
        mounted() {
        },
        methods:{
            //播放暂停按钮点击事件
            playClick(){
                this.isPlay=!this.isPlay
                if (this.isPlay){
                    this.$refs.music.pause()
                }else{
                    this.$refs.music.play()
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
                this.isPlay = !this.isPlay
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
                    this.$refs.music.play()
                    this.isPlay = !this.isPlay
                }
            }

        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        position: fixed;
        bottom: 0;
        height: 70px;
        width: 600px;
        z-index: 100;
        background-color: rgba(250,250,250,.9);
    }
    .control{
        line-height: 70px;
    }
    .photo{
        width: 70px;
        background-color: blue;
    }
    .detail{
        flex: 1;
    }
    .control i{
        font-size: 35px;
        color: rgb(39,192,135);
        cursor: pointer;
        padding:0 8px;
    }
    .control i:hover{
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
</style>