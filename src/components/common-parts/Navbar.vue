<template>
  <div>
    <div class="top-bar">
      <div class="container">
        <div class="middle">
          <span class="middle">
            <i class="fa fa-location-arrow"></i>
          </span>
          <!--<span class="middle">香洲区</span>-->
          <!--<span class="middle">南方软件园</span>-->
          <!--<span class="middle">|</span>-->
          <!--<span class="middle change-link">切换地址</span>-->
        </div>
        <div v-if="!$store.getters.client" class="middle">
          <span class="middle"><router-link to="/login">登录</router-link></span>
          <span class="middle">|</span>
          <span class="middle"><a>注册</a></span>
        </div>
        <div v-else class="middle">
          <span class="middle">{{$store.getters.client.account}}</span>
        </div>
      </div>
    </div>
    <div class="main-bar">
      <div class="container middle">
        <ul class="middle-all middle list">
          <li class="list-item"><router-link to="/" class="active">首页</router-link></li>
          <!--<li class="list-item"><router-link to="/order/list">我的订单</router-link></li>-->
          <!--<li class="list-item"><router-link to="/user/info">个人信息</router-link></li>-->
        </ul>
      </div>
    </div>
    <LoginModal></LoginModal>
  </div>
</template>

<script>
  import LoginModal from '../modal/LoginModal';

  export default {
    name: "Navbar",
    methods:{
      showModal: function () {
        this.$modal.show("login");
      }
    },
    components:{
      'LoginModal' : LoginModal
    }
  }
</script>

<style lang="scss" scoped>
  $top-bar-height: 32px;
  $top-bar-font-color: #ddd;
  $gold: #FFD161;



  .top-bar {
    height: $top-bar-height;
    position: relative;
    z-index: 10;
    background-color: #333;
    color: $top-bar-font-color;
    font-size: 12px;

    .container {
      display: flex;
      justify-content: space-between;

      span {
        height: 100%;
        padding: 0 3px;
      }
      i {
        font-size: 16px;
        color: $top-bar-font-color;
      }
      .change-link {
        color: $gold;
      }
      a{
        text-decoration: none;
        color: $top-bar-font-color;
      }
      a:hover {
        color: lighten($top-bar-font-color, 20);
      }
    }
  }

  .main-bar {
    height: 80px;
    background-color: #FFF;

    .list {
      height: 100%;
      margin: 0;
      padding: 0;

      .list-item {
        height: 100%;
        font-size: 18px;
        padding: 20px;

        a{
          color: #000;
        }

        .router-link-exact-active{
          color: darken($gold, 25%);
        }

        &:hover {
          color: darken($gold, 25%);
        }
      }

    }

  }
</style>
