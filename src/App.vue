<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.initLoginUser();
  },
  methods: {
    async initLoginUser(){
      let res = await this.$http.get(this.$servers.currentUser);
      let params = res.data;
      if(params.status === "1"){
        let client = params.data.client;
        await this.$store.dispatch("clientLogin",client);
      }
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/nomalize.css";

  $body-bg-color: #F5F5F5;

  body{
    background-color: $body-bg-color;
  }
</style>
