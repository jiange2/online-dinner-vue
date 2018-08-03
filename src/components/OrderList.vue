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
            <li>
              <OrderItem></OrderItem>
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

  export default {
    name: "OrderList",
    components: {
      OrderItem,
      'Navbar' : Navbar,
      'InfoSideBar' : InfoSideBar,
      'FooterBar': FooterBar
    },
    activated(){
      let loginClient = this.$store.getters.client;
      if(loginClient === null){
        this.$router.go(-1);
        alert("请先登录");
      }else{
        this.client.phone = loginClient.phone;
        this.client.address = loginClient.address;
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
