<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <InfoSideBar></InfoSideBar>
      <div class="main-content">
        <header>
          <div style="width: 55%">订单内容</div>
          <div style="width: 25%">商家电话</div>
          <div style="width: 15%">支付金额</div>
          <div style="width: 15%">操作</div>
        </header>
        <section>
          <ul>
            <li v-for="order of this.orders">
              <OrderItem :order="order" :ws="ws"></OrderItem>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import InfoSideBar from './common-parts/InfoSideBar';
  import OrderItem from './shop/OrderItem'
  import FooterBar from './common-parts/FooterBar';
  import ClientWs from '../assets/js/ClientWS';

  export default {
    name: "OrderList",
    components: {
      OrderItem,
      'Navbar' : Navbar,
      'InfoSideBar' : InfoSideBar,
      'FooterBar': FooterBar
    },
    data(){
      return {
        orders: []
      }
    },
    activated(){
      this.initOrders();
    },
    methods:{
      async initOrders(){
        this.orders.splice(0,this.orders.length);
        this.getNextOrders();
        this.initWebSocket();
      },
      async getNextOrders(){
        let res = await this.$http.get(this.$servers.listOrders + "/;offset=0;size=10");
        if(res.data.status === "1"){
          let page = res.data.data['orderList'];
          if(page){
            let orders = page.data;

            if(orders.length > 0){
              orders[0].showDetail = true;
              this.orders.push(orders[0]);
              for (let i = 1; i < orders.length; i++) {
                orders[i].showDetail = false;
                this.orders.push(orders[i]);
              }
            }
          }
        }
      },
      initWebSocket(){
        this.ws = new WebSocket(this.$servers.clientWebSocket());
        this.ws.onopen = this.handleOpen;
        this.ws.onmessage = this.handleMessage;
      },
      handleOpen(){
        console.log("ws open");
      },
      cancel(index){

      },
      handleMessage(msg){
        let data = msg.data;
        console.log(msg);
        let res = JSON.parse(data);
        let updateOrder = res.map.order;

        for(let order of this.orders){
          if(updateOrder.id === order.id){
            order.status = updateOrder.status;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 14px;
    display: flex;

    .side-bar{
      width: 20%;
      background-color: white;
    }

    .main-content{
      width: 100%;
      margin-left: 15px;
      background-color: white;
      box-sizing: border-box;

      header{
        display: flex;
        justify-content: space-around;
        padding: 20px 30px;
        border-bottom: 1px solid #dddddd;
        font-size: 13px;
      }

      ul{
        padding: 0;
        margin: 0;
      }
    }
  }


</style>
