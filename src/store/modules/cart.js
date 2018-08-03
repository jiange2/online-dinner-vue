const cart = {
  state: {
    carts: []
  },
  actions: {
    addRecipe: function ({commit}, recipe) {
      commit('addRecipe', recipe)
    },
    removeRecipe:function ({commit},recipe) {
      commit('removeRecipe',recipe);
    }
  },
  mutations: {
    addRecipe: function (state, recipe) {
      let shopId = recipe.shopId;
      let cart;
      //商家是否初始化购物车
      /*if(cart){

      }else{ //初始化购物车
        cart = [];
        state.recipes[shopId] = cart;
      }*/

      for(let item of state.carts){
        if(item.shopId === shopId){
          cart = item;
        }
      }

      console.log(cart);
      for (let item of cart) {//判断是否有菜
        if (item.id === recipe.id) {
          ++item.count;
          return;
        }
      }

      //把商品加到购物车
      let newItem = {};
      for(let key in recipe){
        newItem[key] = recipe[key];
      }
      newItem.count = 1;
      cart.push(newItem);
    },
    removeRecipe: function (state, recipe) {
      let size = state.recipes.length;
      for (let i = 0; i < size; i++) {
        if(state.recipes[i].id === recipe.id){
          state.recipes.splice(i,1);
          return;
        }
      }
    }
  },
  getters: {
    recipes: state => state.recipes,
    cart: (state, getters) => {
      return (id) => {
        for(let cart of state.carts){
          if(cart.shopId === id){
            return cart;
          }
        }
        let cart = [];
        cart.shopId = id;
        state.carts.push(cart);
        return cart;
      }
    },
    anyRecipe: state => state.recipes.size() > 0
  }
};

export default cart;
