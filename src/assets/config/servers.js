let merchantServer = "http://localhost:3000";
//let clientServer = "http://localhost:3000";
let imgServer = "http://localhost:3000";
let clientServer = "http://localhost";

export default {
  server: merchantServer,
  listShop: clientServer + "/shop/",
  getShop: clientServer + "/shop/",
  userLogin: clientServer + "/user/login",
  registerLogin: () => {
    return clientServer + "/user/register";
  },
  getRecipe: clientServer + "/recipe/",
  order: clientServer + "/client/order",
  listOrders: clientServer + "/client/order",
  orderDetail: (order) => {
    return  `${clientServer}/client/order/detail/${order.id}`;
  },
  currentUser: clientServer + "/client/current",
  updateUser: () => clientServer + "/client/",
  postComment: () => {
    return clientServer + "/comments/"
  },
  commentList: () => {
    return clientServer + "/comments/"
  },
  postComplaint: () => {
    return clientServer + "/client/send"
  },
  clientWebSocket:() => {
    return  'ws://10.222.29.149:9090/client/socketServer';
  }
}
