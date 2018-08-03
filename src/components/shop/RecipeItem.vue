<template>
  <div class="item-content">
    <div class="img-wrap">
      <img :src="recipe.recipePic">
    </div>
    <div class="recipe-name">
      {{recipe.recipeName}}
    </div>
    <footer>
      <div class="price">
        ¥{{recipe.price}}
      </div>
      <div class="add-cart-btn" @click="addCart">
        <img src="/static/add-cart.svg">
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "RecipeItem",
    props: ["recipe","shopId"],
    methods: {
      addCart: async function () {
        this.recipe.shopId = this.$route.params['id'];
        console.log(this.$store);
        await this.$store.dispatch("addRecipe",this.recipe)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item-content {
    box-sizing: border-box;
    padding: 25px;
    height: 100%;
    width: 100%;

    .img-wrap {
      width: 100%;
      height: 127px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .recipe-name {
      margin-top: 15px;
      font-weight: 600;
      font-size: 16px;
    }

    footer {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .price {
        color: rgb(255, 90, 90);
        font-weight: 700;
        display: flex;
        align-items: center;
      }

      .add-cart-btn {
        cursor: pointer;
        width: 24px;
      }
    }
  }


</style>
