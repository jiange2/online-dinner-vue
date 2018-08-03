<template>
  <div class="item-content">
    <router-link :to="'/shop/' + shop.id">
      <header>
        <div class="shop-img-wrap">
          <img :src="shop.shopPic[0]">
        </div>
      </header>
      <section>
        <span class="shop-name">{{shop.shopName}}</span>
      </section>
      <section class="middle">
        <span class="star">
          <span :style="{width:14*shop.score+'px'}"></span>
        </span>
        <span class="point middle">{{shop.score}}分</span>
      </section>
      <footer class="middle">
        <span class="start-price mtsi-num">
          <i class="fa fa-clock-o"></i> {{shop.serviceStartTime.format("hh:mm")}}~{{shop.serviceEndTime.format("hh:mm")}}
        </span>
        <span class="send-price mtsi-num">配送费:{{shop.distributionCost}}￥</span>
        <!--<span class="send-time mtsi-num"><i class="fa fa-clock-o"></i> 分钟</span>-->
      </footer>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "ShopItem",
    props: ["shop"],
    data: function () {
      return {
        point: 3.5
      }
    },
    created(){
    }
  }
</script>

<style lang="scss" scoped>
  $star-size: 14px;

  a{
    text-decoration: none;
  }

  .item-content {
    padding: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;

    .shop-img-wrap{
      border: 1px solid #dddddd;
      width: 197px;
      height: 156px;
    }

    section {
      margin: 8px 0;

      .star {
        display: block;
        position: relative;
        height: $star-size;
        width: $star-size * 5;
        background-image: url('/static/star-o.png');
        background-size: $star-size $star-size;

        span {
          position: absolute;
          display: block;
          height: $star-size;
          width: $star-size * 3.5;
          background-image: url('/static/star.png');
          background-size: $star-size $star-size;
        }
      }

      .point {
        margin-left: 5px;
        color: #707070;
        font-size: 13px;
      }

      .shop-name {
        font-size: 16px;
        color: #313131;
      }
    }

    footer{
      margin-top: 12px;
      justify-content: space-between;
      color: #707070;
      font-size: 13px;
    }
  }
</style>
