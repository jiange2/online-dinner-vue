<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div style="width: 40%;">
        <div class="order-items">
          <header class="middle">
            <div>菜名</div>
            <div>价格/份数</div>
          </header>
          <section v-for="item of this.$store.getters.cart(this.$route.params.shopId)">
            <div class="recipe-name">
              {{item.recipeName}}
            </div>
            <div class="recipe-name">
              ¥{{item.price}} * {{item.count}}
            </div>
          </section>
          <section>
            <div>
              <strong>合计</strong>
            </div>
            <div>
              <strong>¥{{cartSumCost}}</strong>
            </div>
          </section>
        </div>
      </div>
      <div style="width: 55%">
        <div class="order-info">
          <header>
            请选择您的收餐地址
          </header>
          <section class="address-box">
            <div>
              <input type="text" v-model="order.phone" placeholder="电话号码">
            </div>
            <div class="address-input">
              <input type="text" v-model="order.address" placeholder="地址"/>
            </div>
            <div class="address-input">
              <input type="text" v-model="order.remark" placeholder="商家留言"/>
            </div>
          </section>
          <footer>
            <div class="btn">
              <a @click="postOrder">去付款</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import FooterBar from './common-parts/FooterBar';
  import util from '../assets/js/util';

  export default {
    name: "order",
    components: {
      'Navbar': Navbar,
      'FooterBar': FooterBar
    },
    data(){
      return{
        order: {
          phone: '',
          address: '',
          remark : '',
          shopId : this.$route.params['shopId'],
          status : 1
        }
      }
    },
    created(){
      let client = this.$store.getters.client;
      this.order.phone = client.phone;
      this.order.phone = client.address;
    },
    methods:{
      async postOrder(){
        let res = await this.$http.post(this.$servers.order,this.createOrder());
        let param = res.data;
        if(param === "1"){

        }else{
          let error = param.data.errors[0];
          console.log(error);
          if(error['objectName'] === "user"){
            await this.$store.dispatch("logout");
            alert(error['defaultMessage']);
          }
        }
      },
      getCart(){
        return this.$store.getters.cart(this.$route.params['shopId']);
      },
      createOrder(){
        let data = {};
        util.mergeObject(data, this.order, true);
        data.client = this.$store.getters.client;
        let orderItems = [];
        console.log(this.getCart());
        for(let item of this.getCart()){
          let orderItem = {};
          orderItem.recipeId = item.id;
          orderItem.count = item.count;
          orderItems.push(orderItem);
        }
        data.items = orderItems;
        return data;
      }
    },
    computed:{
      cartSumCost: function () {
        let count = 0;
        for (let recipe of this.getCart()) {
          count += recipe.price * parseInt(recipe.count);
        }
        return count;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 15px;
    display: flex;

    .order-items {
      background-color: #FFF;

      margin-right: 35px;
      padding: 15px;
      border: 1px solid #ebebeb;
      height: auto;

      header {
        justify-content: space-between;
        padding: 15px 5px;
        font-weight: 700;
        border-bottom: 1px dashed #ebebeb;
      }

      section{
        display: flex;
        justify-content: space-between;
        padding: 15px 5px;
        border-bottom: 1px dashed #ebebeb;

        &:last-child{
          border-bottom: none;
        }

        strong{
          font-size: 18px;
        }
      }
    }

    .order-info {
      background-color: #FFF;
      border: 1px solid #ebebeb;
      padding: 30px;

      header{
        font-size: 16px;
        font-weight: 500;
      }

      .address-box{
        border: 1px solid #eeeeee;
        padding: 0 20px;
        margin: 20px 0;
        position: relative;
        background-color: #fafafa;
        color: #313131;
        font-size: 14px;
        overflow: hidden;

        .address-input{
          border-top: 1px dashed #e5e5e5;
        }
        input{
          border: none;
          background-color: #fafafa;
          padding: 14px 0;
          outline: none;
          width: 100%;
        }
      }
      footer{
        display: flex;
        justify-content: flex-end;

        .btn{
          a{
            padding: 8px 14px;
            border: 1px solid #f6cf00;
            background-color: #ffd600;
          }
        }
      }
    }
  }
</style>
