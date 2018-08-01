<template>
    <div class="item-content">
      <a>
        <header>
          <div class="shop-img-wrap">
            <img src="@/assets/shop1.jpg">
          </div>
        </header>
        <section>
          店名。。。
        </section>
        <section>
          评价。。。
        </section>
        <footer>

        </footer>
      </a>
    </div>
</template>

<script>
    export default {
        name: "ShopItem"
    }
</script>

<style scoped>
  .item-content{
    padding: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
