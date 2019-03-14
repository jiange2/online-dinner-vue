<template>

  <div>
    <Navbar></Navbar>
    <div>
      <div style="width: 990px;margin: 20px auto;background: white;border-radius: 3px;height: auto;padding: 20px">

        <div style="margin: 12px 0">
          标题 ： <input type="text" v-model="picture.tile">
        </div>
        <div style="margin: 12px 0">
          描述 ： <input type="text" v-model="picture.description">
        </div>
        <div style="margin: 12px 0">
          <input type="text" v-model="picture.account" hidden>
        </div>
        <div style="margin: 12px 0">
          <a style="display: inline-block;" class="btn" @click="toggleShow">上传图片</a>
        </div>
        <div style="margin: 12px 0">
          图片预览：
        </div>
        <div>
          <img :src="imgDataUrl" style="max-height: 500px;width: auto">
        </div>
        <div>
          <a class="btn" @click="addImage" style="display: inline-block;">确认</a>
        </div>
      </div>
      <my-upload field="file"
                 @crop-success="cropSuccess"
                 @crop-upload-success="cropUploadSuccess"
                 @crop-upload-fail="cropUploadFail"
                 v-model="show"
                 :width="560"
                 :height="360"
                 url="http://localhost/picture/imgUpdate"
                 :params="params"
                 :headers="headers"
                 img-format="png"></my-upload>
    </div>

  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';

  export default {
    data() {
      return {
        show: false,
        params: {},
        headers: {
          smail: '*_~'
        },
        imgDataUrl: '',
        picture: {
          account: '',
          description: '',
          picUrl: '',
          tile: ''
        }
      }
    },
    activated() {
      this.picture.account = this.$store.getters.client.account;
    },
    components: {
      'my-upload': myUpload,
      'Navbar': Navbar
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      },
      cropSuccess(res, field) {
      },
      cropUploadSuccess(res, field) {
        this.picture.picUrl = res.data.filename;
        this.imgDataUrl = res.data.url;
      },
      cropUploadFail(status, field) {
        console.log(status);
      },
      async addImage() {
        let res = await this.$http.post("http://localhost/picture", this.picture);
        console.log(res);
        res = res.data;
        if(res.status === "success"){
          alert("上传成功");
        }else{
          alert("上传失败");
        }
      }
    }
  }
</script>

<style scoped>
  .btn {
    border-radius: 3px;
    border: 1px solid #00a997;
    background-color: #00d3c0;
    padding: 12px;
    font-size: 14px;
  }
</style>
