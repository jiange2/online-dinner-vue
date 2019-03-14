<template>
  <div class="order-item-internal">
    <div class="item" @click="toggleDetail">
      <div style="width: 55%" class="order-info">
        <div class="shop-img-wrap">
          <img :src="order.shop.shopPic[0]">
        </div>
        <div class="shop-name">
          <div>{{order.shop.shopName}}</div>
          <div class="order-id">
            <div>{{new Date(order.orderTime).format("yyyy-MM-dd hh:mm:ss")}}</div>
            <span>订单号：{{order.id}}</span>
          </div>
        </div>
      </div>
      <div class="tb-item" style="width: 25%">{{order.phone}}</div>
      <div class="tb-item" style="width: 15%">¥{{order.cost}}</div>
      <div class="tb-item" style="width: 15%"></div>
    </div>
    <div v-if="order['showDetail']" class="item-detail">
      <OrderItemDetail :order="order" :ws="ws"></OrderItemDetail>
    </div>
  </div>
</template>

<script>
  import OrderItemDetail from './OrderItemDetail';

  export default {
    name: "OrderItem",
    components: {
      'OrderItemDetail' : OrderItemDetail
    },
    props:["order","ws"],
    created(){
    },
    methods:{
      toggleDetail(){
        this.order['showDetail'] = !this.order['showDetail'];
      }
    }
  }
</script>

<style lang="scss" scoped>

  .order-item-internal{
    border-bottom: 1px dashed #dddddd;


  }

  .item {
    display: flex;
    justify-content: space-around;
    padding: 40px 30px;
    cursor: pointer;
    font-size: 13px;

    &:hover{
      background-color: #dddddd;
    }

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
