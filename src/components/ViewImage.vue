<template>
  <div>
    <navbar/>
    <div style="width: 1200px;margin: 12px auto;background-color: white">
      <ul style="list-style: none;margin: 0;padding: 0">
        <li v-for="(item,index) of imageList" style="padding: 0;margin: 0;height: auto">
          <div style="height: auto;
          display: flex;
          background-color: rgb(80, 80, 80);
          width: 100%;
          justify-content: space-between;
          border-bottom: 1px solid rgb(101,101,101)">
            <div v-if="(index % 2 == 0)" style="height: auto">
              <img :src="item.picUrl" style="height: 370px;width:auto;display: block"/>
            </div>
            <div style="color: #dadada;width: 100%">
              <div style="height: 86%;width: 100%">
                <div style="padding:0 20px"><h1 style="text-align: left">{{item.tile}}</h1></div>
                <div style="padding: 0 20px">{{item.description}}</div>
              </div>
              <div :style="{padding: '0 20px',float: (index % 2 == 1) ? 'left':'right',color:'rgb(150, 150, 150)'}">
                <a>删除</a>
              </div>
            </div>
            <div v-if="(index % 2 == 1)" style="height: auto;">
              <img :src="item.picUrl" style="height: 370px;width:auto;display: block"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  export default {
    name: "ViewImage",
    data() {
      return {
        imageList : []
      }
    },
    activated(){
      this.getAllImage();
    },
    components: {
      'Navbar': Navbar
    },
    methods: {
      getAllImage: async function () {
        let res = await this.$http.get("http://localhost/picture", this.picture);
        res = res.data;
        if(res.status === "success"){
          for (let image of res.data){
            this.imageList.push(image);
          }
          console.log(this.imageList)
        }
      }
    }
  }
</script>

<style scoped>

</style>
