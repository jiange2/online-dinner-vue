let merchantServer = "http://localhost:3000";
//let clientServer = "http://localhost:3000";
let imgServer = "http://localhost:3000";
let clientServer = "http://10.222.29.149:9090";

export default {
  server: merchantServer,
  listShop: clientServer + "/shop/",
  getShop: clientServer + "/shop/",
  userLogin: clientServer + "/client/login",
  getRecipe: clientServer + "/recipe/",
  order: clientServer + "/client/order",
  currentUser: clientServer + "/client/current",
  updateUser: clientServer + "/client/",
  clientWebSocket: 'ws://localhost:9090/websocket'

}
