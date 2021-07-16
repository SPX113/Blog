<template>
    <div class="container" >
        <el-card shadow="hover" class="box-card">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="文章标题">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="文章标签">
                    <el-input v-model="form.tags"></el-input>
                </el-form-item>
                <el-form-item label="是否推荐">
                    <el-switch v-model="form.rec"></el-switch>
                </el-form-item>
                <el-form-item label="文章描述">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="背景图片">
                    <el-upload
                        class="upload-photo"
                        ref="photo"
                        action="http://localhost:3000/posts/"
                        :on-preview="handlePreview"
                        :on-remove="photoRemove"
                        :file-list="photoList"
                        :limit="1"
                        :before-upload="beforeUploadP"
                        accept=".jpg,.png,.jpeg"
                        list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
                </el-form-item>
                <el-form-item label="博客文件">
                    <el-upload
                            class="upload-blog"
                            ref="blog"
                            action="http://localhost:3000/posts/"
                            :on-preview="handlePreview"
                            :on-remove="blogRemove"
                            :file-list="blogList"
                            :limit="1"
                            :before-upload="beforeUploadB"
                            accept=".md"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button @click="clear">取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {upload} from "../../network/post";
    import {notificationMixin} from "../../common/mixin";

    export default {
        name: "Commit",
        mixins : [notificationMixin],
        data(){
            return{
                form: {
                    name: '',
                    tags: '',
                    rec: false,
                    desc: '',
                },
                photoList: [],
                blogList: [],
                photo: {},
                blog: {}
            }
        },
        mounted(){

        },
        methods:{
            //提交
            onSubmit() {
                //验证表单数据
                if(this.form.name === '' || this.form.tags === '' || this.form.desc === '' || Object.keys(this.photo).length === 0 || Object.keys(this.blog).length === 0){
                    return this.warning();
                }
                let fd = new FormData();
                fd.append('name',this.form.name);
                fd.append('tags',this.form.tags);
                fd.append('rec',this.form.rec);
                fd.append('desc',this.form.desc);
                fd.append('photo',this.photo);
                fd.append('blog',this.blog);
                //上传
                upload(fd).then(res =>{
                    this.success("发布成功");
                    this.clear();
                }).catch(err =>{
                    this.error();
                })
            },
            photoRemove(file, fileList) {
                this.photo = {};
            },
            blogRemove(file, fileList){
                this.blog = {};
            },
            handlePreview(file) {
                console.log(file);
            },
            beforeUploadP(file){
                this.photo = file;
            },
            beforeUploadB(file){
                this.blog = file;
            },
            //重置
            clear(){
                this.form.name = '';
                this.form.tags = '';
                this.form.rec = false;
                this.form.desc = '';
                this.$refs['photo'].clearFiles();
                this.photo = {};
                this.$refs['blog'].clearFiles();
                this.blog = {};
            }

        }
    }
</script>

<style scoped>
    .container{
        min-height: calc(100vh - 61px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-card{
        height: 100%;
        width: 70%;

    }

</style>