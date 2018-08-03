const client = {
  state: {
    client: null
  },
  actions: {
    clientLogin: function ({commit},client) {
      console.log("login",client);
      commit('login',client);
    },
    clientLogout: function ({commit}) {
      commit("logout");
    }
  },
  mutations: {
    login(state, client) {
      state.client = client;
    },
    logout(state){
      state.client = null;
    }
  },
  getters: {
    client : state => state.client,
    isLogin: (state) => {
      console.log("isLogin",state.client);
      console.log(state.client !== null);
      return state.client !== null;
    }
  }
};

export default client;
