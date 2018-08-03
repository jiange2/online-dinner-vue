<template>
  <div class="item middle">
    <div>{{recipe.recipeName}}</div>
    <div class="middle amount">
      <div class="btn" @click="reduce">-</div>
      <div><input min="1" max="99" type="number" v-model="recipe.count"></div>
      <div class="btn" @click="recipe.count++">+</div>
    </div>
    <div class="price">
      ¥{{price}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartRecipeItem",
    props: ['recipe'],
    created(){
      console.log("recipe",this.recipe)
    },
    methods:{
      reduce(){
        if(this.recipe.count > 1){
          --this.recipe.count;
        }else{
          this.remove();
        }
      },
      async remove(){
        await this.$store.dispatch("removeRecipe",this.recipe);
      }
    },
    computed:{
      price(){
        return this.recipe.price * this.recipe.count;
      }
    },
    watch:{
      "recipe.count":function () {
        if(this.recipe.count > 99){
          this.recipe.count = 99;
        }else if(this.recipe.count <= 0){
          this.recipe.count = 1;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"]{
    -moz-appearance: textfield;
  }

  .item{
    justify-content: space-between;
  }
  input{
    outline: none;
    width: 30px;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    text-align: center;
    font-size: 12px;
    color: #333333;
  }
  .amount{
    border: 1px solid #ddd;
  }
  .btn{
    padding: 0 5px;
    cursor: pointer;
  }

</style>
