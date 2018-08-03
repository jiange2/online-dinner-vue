<template>
    <div class="side-bar">
      <div>
        <ul>
          <li>
            <router-link to="/order/list">
              <i style="background-image: url('/static/order-tip-active.svg')"></i><span>订单列表</span>
            </router-link>
          </li>
          <li>
            <router-link to="/user/info">
              <i style="background-image: url('/static/account-tip-active.svg')"></i><span>用户信息</span>

            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "InfoSideBar"
    }
</script>

<style lang="scss" scoped>
  .side-bar{

    ul{
      margin: 0;
      padding: 0;

      li{
        font-size: 16px;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        margin: 14px 0;

        a{
          box-sizing: border-box;
          padding: 14px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: black;
        }

        i{
          $size:24px;

          display: block;
          width: $size;
          height: $size;
          background-size: $size $size;
        }

        span{
          margin-left: 8px;
        }

        .router-link-exact-active{
          background-color: #fafafa;
          color: #333;
        }
      }
    }
  }
</style>
