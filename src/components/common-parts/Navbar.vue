<template>
  <div>
    <div class="top-bar">
      <div class="container">
        <div class="middle">
          <span class="middle">
            <i class="fa fa-location-arrow"></i>
          </span>
          <span class="middle">香洲区</span>
          <span class="middle">南方软件园</span>
          <span class="middle">|</span>
          <span class="middle change-link">切换地址</span>
        </div>
        <div class="middle">
          <span class="middle"><a>登录</a></span>
          <span class="middle">|</span>
          <span class="middle"><a>注册</a></span>
        </div>
      </div>
    </div>
    <div class="main-bar">
      <div class="container middle">
        <ul class="middle-all middle list">
          <li class="list-item"><a class="active">首页</a></li>
          <li class="list-item"><a>我的订单</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
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
      a:hover{
        color: lighten($top-bar-font-color,20);
      }
    }
  }

  .main-bar{
    height: 80px;
    background-color: #FFF;

    .list{
      height: 100%;
      margin: 0;
      padding: 0;

      .list-item{
        height: 100%;
        font-size: 18px;
        padding: 20px;

        .active{
          color: darken($gold,25%);
        }

        &:hover{
          color: darken($gold,25%);
        }
      }



    }

  }
</style>
