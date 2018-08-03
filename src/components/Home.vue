<template>
  <div>
    <Navbar></Navbar>

    <div class="main-content">
      <div class="container">
        <ul class="middle shop-row">
          <li v-for="shop in shops" class="shop-item">
            <ShopItem :shop="shop"></ShopItem>
          </li>
        </ul>
      </div>
    </div>

    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import ShopItem from './shop/ShopItem';
  import FooterBar from './common-parts/FooterBar';

  export default {
    name: "Home",
    components: {
      'Navbar' : Navbar,
      'ShopItem' : ShopItem,
      'FooterBar': FooterBar
    },
    data(){
      return {
        shops : []
      }
    },
    created(){
      this.listShop();
    },
    methods:{
      async listShop(){
        let res = await this.$http.get(this.$servers.listShop);
        let data = res.data;
        if(data.status === '1'){
          let shops = data.data.shops;
          shops.forEach((item) => {
            item.serviceEndTime = new Date(item.serviceEndTime);
            item.serviceStartTime = new Date(item.serviceStartTime);
            this.shops.push(item);
          });
          console.log(shops);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    background-color: #FFF;

    .shop-row{
      flex-wrap: wrap;
      align-content: flex-start;
      padding: 20px;
      margin: 20px 0 0 0;

      .shop-item{
        height: 288px;
        width: 25%;
      }
    }
  }
</style>
