<template>
  <div>
    <Navbar></Navbar>

    <ShopTitle :shop="shop"></ShopTitle>

    <div class="recipe-content container">
      <div class="title middle">
        <!--{{shop.introduction.substring(0,30)}}-->
        <div><!---->
          <a @click="showShop" :class="[shopShow?'active':'']">菜单</a>
        </div>
        <div> <!---->
          <a @click="showComment" :class="[commentShow?'active':'']">评价</a>
        </div>
      </div>
      <ul v-if="shopShow" class="recipe-items middle">
        <li v-for="recipe in recipes" class="recipe-item">
          <RecipeItem :recipe="recipe"></RecipeItem>
        </li>
      </ul>
      <ul v-if="commentShow" class="comment-items">
        <li class="comment-item-wrap" v-for="comment of comments">
          <CommentItem :comment="comment"></CommentItem>
        </li>
      </ul>
    </div>

    <div class="cart">
      <!-- v-if="$store.getters.anyRecipe"-->
      <div class="cart-content">
        <header class="middle">
          <div>购物车</div>
          <div>清空菜品</div>
        </header>
        <section>
          <ul>
            <li v-for="recipe in this.getCart()">
              <CartRecipeItem :recipe="recipe" :ShopId="id"></CartRecipeItem>
            </li>
          </ul>
        </section>
        <section class="d-cost middle">
          <div>
            配送费
          </div>
          <div>
            ¥{{shop.distributionCost}}
          </div>
        </section>
        <section class="s-cost middle">
          <div>
            共{{cartSumCount}}份，总计<strong>¥{{ cartSumCost + shop.distributionCost}}</strong>
          </div>
        </section>
      </div>
      <div class="footer middle">
        <div class="icon"></div>
        <div class="btn-wrap">
          <router-link :to="'/order/' + this.$route.params['id']">立即下单</router-link>
        </div>
      </div>
    </div>
    <notifications position="top center" group="tips"/>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Navbar from './common-parts/Navbar';
  import RecipeItem from './shop/RecipeItem';
  import CartRecipeItem from './shop/CartRecipeItem';
  import FooterBar from './common-parts/FooterBar';
  import ShopTitle from './shop/ShopTitle';
  import CommentItem from './shop/CommentItem';

  export default {
    name: "Shop",
    data() {
      return {
        id: -1,
        shop: {},
        recipes: [],
        shopShow: true,
        commentShow: false,
        comments: []
      }
    },
    activated() {
      this.id = this.$route.params['id'];
      this.shop = {};
      this.recipes = [];
      this.comments = [];
      this.initComment = false;
      this.getShop();
      this.getRecipes();
    },
    components: {
      'Navbar': Navbar,
      'RecipeItem': RecipeItem,
      'CartRecipeItem': CartRecipeItem,
      'FooterBar': FooterBar,
      'ShopTitle': ShopTitle,
      'CommentItem': CommentItem
    },
    computed: {
      cartSumCount: function () {
        let count = 0;
        for (let recipe of this.getCart()) {
          count += parseInt(recipe.count);
        }
        return count;
      },
      cartSumCost: function () {
        let count = 0;
        for (let recipe of this.getCart()) {
          count += recipe.price * parseInt(recipe.count);
        }
        return count;
      }
    },
    methods: {
      getCart(){
        return this.$store.getters.cart(this.$route.params['id']);
      },
      showShop() {
        this.commentShow = false;
        this.shopShow = true;
      },
      async showComment() {
        this.shopShow = false;
        if(!this.initComment){
          let res = await this.$http.get(this.$servers.commentList() + this.$route.params['id']);
          let params = res.data;
          if(params.status === "1"){
            this.comments = params.data.commentList;
          }
        }
        this.commentShow = true;
      },
      async getShop() {
        try {
          let res = await this.$http.get(this.$servers.getShop + this.id);
          if (res.data.status === "1") {
            this.shop = res.data.data.shop;
            this.shop.serviceStartTime = new Date(this.shop.serviceStartTime).format("hh:mm");
            this.shop.serviceEndTime = new Date(this.shop.serviceEndTime).format("hh:mm");
          } else {
            this.errorTip("获取店家失败", "店家不存在");
          }
        } catch (e) {
          this.errorTip("获取店家失败", "网络连接错误");
        }
      },
      async getRecipes() {
        try {
          let res = await this.$http.get(this.$servers.getRecipe + this.id);
          if (res.data.status === "1") {
            this.recipes.slice(0,this.recipes.length);
            let recipes = res.data.data.recipes;
            for (let recipe of recipes) {
              this.recipes.push(recipe);
            }
          } else {
            this.errorTip("获取菜品列表失败", "未知错误");
          }
        } catch (e) {
          this.errorTip("获取菜品列表失败", "网络连接错误");
        }
      },
      async getComments(){

      },
      errorTip(title, msg) {
        this.$notify({
          group: 'tips',
          title: title,
          text: msg,
          type: 'error'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>



  .title{
    div{
      margin: 0 25px;
      height: 100%;

      a{
        color: #3b3b3b;
        font-size: 16px;
        height: 99%;
        display: flex;
        align-items: center;
      }

      .active{
        color: #ffa627;
        border-bottom: 3px solid #ffa627;
      }
    }
  }

  .recipe-content {
    margin-top: 15px;
    background-color: #FFF;

    .title {
      height: 60px;
      font-size: 22px;
      border-bottom: 1px solid #DDD;
      padding-left: 14px;
    }

    .recipe-items {
      flex-wrap: wrap;
      margin: 0;
      padding: 0;

      .recipe-item {
        width: 25%;
        height: 252px;
        border-bottom: 1px dashed #ddd;
        border-right: 1px dashed #ddd;
        box-sizing: border-box;
      }

      .recipe-item:nth-child(4n) {
        border-right: none;
      }
    }
  }

  .cart {
    position: fixed;
    bottom: 0;
    right: 6%;
    width: 306px;
    background-color: #FFF;

    .cart-content {
      header {
        background-color: #fafafa;
        height: 45px;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 600;

        div {
          box-sizing: border-box;
          padding: 14px;
        }
      }
      section {
        ul {
          margin: 0;
          padding: 0;
          li {
            margin: 16px 14px 14px 14px;
            padding-bottom: 14px;
            border-bottom: 1px solid #ddd;
          }
        }
      }
      .d-cost {
        padding: 16px 14px 14px 14px;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
      }
      .s-cost {
        padding: 16px 14px 14px 14px;
        justify-content: flex-end;

        strong {
          font-size: 24px;
          color: #fe4d3d;
        }
      }
    }

    .footer {
      height: 50px;
      background-color: #333;
      width: 100%;
      justify-content: space-between;

      .icon {
        margin-left: 12px;
        height: 25px;
        width: 25px;
        background-image: url("/static/Combined Shape.svg");
      }

      .btn-wrap {
        height: 100%;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          width: 100px;
          height: 100%;
          background-color: #ffd161;
          color: black;
        }
      }
    }
  }
  .comment-items{
    padding: 0;

    .comment-item-wrap{
      padding: 25px 40px;
      border-bottom: 1px solid #e5e5e5;

      &:last-child{
        border-bottom: none;
      }
    }
  }
</style>
