<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <InfoSideBar></InfoSideBar>
      <div class="main-content">
        <div v-if="$store.getters.client" class="user-info">
          <div class="info" style="display: flex;align-items: center">
            我的头像：
            <div style="height: 60px;width: 60px">
              <img src="/static/user-def.png">
            </div>
          </div>
          <div class="info">
            用户名：{{$store.getters.client.account}}
          </div>
          <div class="info">
            电话号码：{{$store.getters.client.phone}}
          </div>
          <div class="info">
            收货地址：{{$store.getters.client.address}}
          </div>
        </div>
        <div class="user-info" style="width: 60%;margin-top: 36px">
          <div>
            <div class="middle"><input type="text" placeholder="密码" v-model="client.password"/></div></div>
          <div>
            <div class="middle"><input type="text" placeholder="电话号码" v-model="client.phone"/></div>
          </div>
          <div>
            <div class="middle"><input type="text" placeholder="收货地址" v-model="client.address"/></div>
          </div>
          <div>
            <div class="middle" style="justify-content: flex-end"><a class="btn" @click="update">修改</a></div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import FooterBar from './common-parts/FooterBar';
  import InfoSideBar from './common-parts/InfoSideBar';

  export default {
    name: "UserInfo",
    components: {
      'Navbar': Navbar,
      'InfoSideBar': InfoSideBar,
      'FooterBar': FooterBar
    },
    data(){
      return {
        client:{
          id: "",
          password: "",
          phone: "",
          address: ""
        }
      }
    },
    activated(){
      let loginClient = this.$store.getters.client;
      if(loginClient === null){
        this.$router.go(-1);
        this.$store.dispatch("clientLogout");
        alert("请先登录");
      }else{
        this.client.id = loginClient.id;
        this.client.phone = loginClient.phone;
        this.client.address = loginClient.address;
      }
    },
    methods:{
      async update(){
        let res = await this.$http.put(this.$servers.updateUser(),this.client);
        let status = res.data.status;
        if(status === "1"){
          let client = res.data.data.client;
          await this.$store.dispatch("clientLogin",client);
        }else{
          let errors = res.data.data.errors;
          alert(errors[0].defaultMessage);
        }
      },
      updateUser(client){
        let loginClient = this.$store.getters.client;
        loginClient.phone = client.phone;
        loginClient.address = client.address;
      }
    }
  }
</script>

<style lang="scss" scoped>

  .container{
    display: flex;
    margin-top: 15px;
  }

  .side-bar{
    width: 20%;
    background-color: white;
  }

  .main-content{
    width: 100%;
    margin-left: 15px;
    background-color: white;
    padding: 20px 40px;
    display: flex;
    box-sizing: border-box;

    .info{
      padding: 3px;
    }

    .user-info{
      width: 40%;
      div{
        margin: 18px;
        font-size: 15px;
      }
      input{
        border: none;
        border-bottom: 1px dashed #d9d9d9;
        padding: 5px;
        border-radius: 2px;
        outline: none;
        width: 100%;
      }

      .middle{
        span{
          display: block;
          width: 100px;
        }
      }

      .btn{
        padding: 10px 20px;
        background-color: #ffd161;
      }
    }
  }


</style>
