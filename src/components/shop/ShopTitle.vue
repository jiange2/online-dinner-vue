<template>
  <div>
    <div class="container top-bar">
      <div class="rest-info middle">
        <div class="middle">
          <div class="shop-img-wrap">
            <img :src="shop.shopPic?shop.shopPic[0]:null">
          </div>
          <div class="middle shop-info">
            <div>
              <div class="shop-name">
                {{shop.shopName}}
              </div>
              <div class="middle">
                <span class="star">
                  <span :style="{width:15.8*shop.score+'px'}"></span>
                </span>
                <span class="point middle">{{shop.score}}分</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-bar middle">
          <div class="info">
            <span class="title">配送费</span>
            <div class="content">
              <strong>{{shop.distributionCost}}</strong>元
            </div>
          </div>
          <div class="info">
            <span class="title">服务起始时间</span>
            <div class="content">
              <strong>{{shop.serviceStartTime}}</strong>
            </div>
          </div>
          <div class="info">
            <span class="title">服务结束时间</span>
            <div class="content">
              <strong>{{shop.serviceEndTime}}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopTitle",
    props: ['shop'],
    created(){
      console.log(this.shop);
    }
  }
</script>

<style lang="scss" scoped>
  $star-size: 16px;

  .top-bar {
    background-color: white;
    margin-top: 15px;
    height: 120px;
  }

  .rest-info {
    height: 100%;
    justify-content: space-between;

    .middle {
      height: 100%;

      .shop-img-wrap {
        height: 80px;
        width: 120px;
        margin-left: 12px;
        border: 1px solid #ddd;
      }
      .shop-info {
        margin-left: 12px;
        align-items: center;

        .shop-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .point {
          margin-left: 5px;
          font-size: 12px;
          vertical-align: bottom;
          line-height: 16px;
        }
      }
    }

    .right-bar {
      margin-right: 20px;
      height: 100%;

      .info {
        height: 65px;
        margin: 0 20px;

        .title {
          font-size: 13px;
        }

        .content {
          margin-top: 10px;
          strong {
            margin-right: 5px;
            font-size: 25px;
            vertical-align: sub;
            color: #4a4a4a;
          }
        }
      }
    }
  }

  .star {
    display: block;
    position: relative;
    height: $star-size * 0.99;
    width: $star-size * 4.85;
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
</style>
