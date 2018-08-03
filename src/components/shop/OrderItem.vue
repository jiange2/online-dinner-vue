<template>
  <div class="order-item-internal">
    <div class="item">
      <div style="width: 55%" class="order-info">
        <div class="shop-img-wrap">
          <img src="http://p0.meituan.net/120.0/waimaipoi/f091e5785c6535ae96482a6959e0477b1035805.png">
        </div>
        <div class="shop-name">
          <div>苏妈妈石磨肠粉</div>
          <div class="order-id">
            <div>2018-06-29 12:10</div>
            <span>订单号：15401061012633717</span>
          </div>
        </div>
      </div>
      <div class="tb-item" style="width: 25%">020-85829561/13160864343</div>
      <div class="tb-item" style="width: 15%">¥19.09</div>
      <div class="tb-item" style="width: 15%">操作</div>
    </div>
    <div class="item-detail">
      <OrderItemDetail></OrderItemDetail>
    </div>
  </div>
</template>

<script>
  import OrderItemDetail from './OrderItemDetail';

  export default {
    name: "OrderItem",
    components: {
      'OrderItemDetail' : OrderItemDetail
    }
  }
</script>

<style lang="scss" scoped>

  .order-item-internal{
    border-bottom: 1px dashed #dddddd;

    &:last-child{
      border-bottom: none;
    }
  }

  .item {
    display: flex;
    justify-content: space-around;
    margin: 40px 30px;
    font-size: 13px;

    .tb-item {
      display: flex;
      align-items: center;
    }

    .order-info {
      display: flex;

      .shop-img-wrap {
        width: 93px;
        height: 70px;
      }
      .shop-name {
        margin-left: 15px;
        font-size: 15px;
        font-weight: 700;

        .order-id {
          margin-top: 14px;
          font-size: 12px;
          font-weight: 500;
          color: #797979;
        }
      }
    }
  }

  .item-detail{
    margin: 0 0 40px 30px;
  }
</style>
