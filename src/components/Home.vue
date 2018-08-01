<template>
  <div>
    <Navbar></Navbar>

    <div class="main-content">
      <div class="container">
        <ul class="middle shop-row">
          <li class="shop-item">
            <ShopItem></ShopItem>
          </li>
          <li class="shop-item">
            <ShopItem></ShopItem>
          </li>
          <li class="shop-item">
            <ShopItem></ShopItem>
          </li>
          <li class="shop-item">
            <ShopItem></ShopItem>
          </li>
          <li class="shop-item">
            <ShopItem></ShopItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import ShopItem from './shop/ShopItem';

  export default {
    name: "Home",
    components: {
      'Navbar' : Navbar,
      'ShopItem' : ShopItem
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    background-color: #FFF;

    .shop-row{
      flex-wrap: wrap;
      align-content: flex-start;
      padding: 0;
      margin: 20px 0 0 0;

      .shop-item{
        height: 288px;
        width: 25%;
      }
    }
  }
</style>
