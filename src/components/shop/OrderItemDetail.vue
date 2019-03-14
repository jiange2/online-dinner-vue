<template>
  <div class="detail">
    <div class="content order">
      <header>订单详情</header>
      <section>
        <ul>
          <!--v-for="item of order['orderItems']"-->
          <li v-for="item of this.orderItems">
            <div class="recipe-name">
              {{item.recipeName}}
            </div>
            <div>
              ¥{{item.price}} * {{item.count}}
            </div>
          </li>
          <li style="border-bottom: 1px dashed #ddd;">
            <div>
              配送费
            </div>
            <div>
              ¥{{order.shop.distributionCost}}
            </div>
          </li>
          <li style="margin-top: 14px;border-bottom: 1px dashed #ddd;">
            <div></div>
            <div style="font-size: 13px;color: #333333">实际支付：<span>¥{{order.cost}}</span></div>
          </li>
          <li class="info" style="">
            <div>地址：{{order.address}}</div>
            <div>电话：{{order.phone}}</div>
            <div>备注：{{order.remark}}</div>
            <div></div>
          </li>
        </ul>
      </section>
    </div>
    <div class="content status">
      <header>订单状态</header>
      <section>
        <div class="process-bar">
          <i :class="['point',order.status >= 1?'finished':'']"></i> <!-- 订单提交成功，等待付款 -->
          <i :class="['arrow',order.status >= 1?'finished':'']"></i>
          <i :class="['point',order.status >= 1?'finished':'']"></i> <!-- 支付成功，等待商家接单 -->
          <i :class="['arrow',order.status >= 2?'finished':'']"></i>
          <i :class="['point',order.status >= 2?'finished':'']"></i> <!-- 商家接单 -->
          <i :class="['arrow',order.status >= 3?'finished':'']"></i>
          <i :class="['point',order.status >= 3?'finished':'']"></i> <!-- 制作配送中 -->
          <i :class="['arrow',order.status >= 4?'finished':'']"></i>
          <i :class="['point',order.status >= 4?'finished':'']"></i> <!-- 到达指定地点 -->
          <i :class="['arrow',order.status >= 4?'finished':'']"></i>
          <i :class="['point',order.status >= 4?'finished':'']"></i> <!-- 订单结束 -->
        </div>
        <div class="status-bar">
          <div>
            订单提交成功，等待付款
          </div>
          <div>
            支付成功，等待商家接单 <span v-if="order.status === 1">
            <a style="color: #2e6da4;margin-left: 14px" @click="cancel(6,order)">取消订单</a>
          </span>
          </div>
          <div>
            商家接单
          </div>
          <div>
            制作配送中
          </div>
          <div>
            到达指定地点
          </div>
          <div>
            订单结束
            <span v-if="order.status === 4"><a @click="showCommentModal" style="color: #2e6da4;margin-left: 14px">评价</a></span>
            <span v-if="order.status === 5">（商家拒绝接单）</span>
            <span v-if="order.status === 6">（订单取消）</span>
            <span v-if="order.status === 7">（已评价）</span>
            <span><a @click="showComplaintModal" style="color: #2e6da4;margin-left: 14px">投诉</a></span>
          </div>
        </div>
      </section>
    </div>
    <vue-modal :name="'comment-modal-' + order.id">
      <div class="comment-content">
        <div>
          <input type="text" v-model="comment.content" placeholder="评价">
        </div>
      </div>
      <div class="comment-content">
        <div class="star-wrap">
          评分：
          <div class="star" @click="countStarWidth">
            <span :style="{width: parseInt((comment.score/5) * 100) + '%'}"></span>
          </div>
        </div>
      </div>
      <div class="comment-content">
        <div>
          <a class="btn" @click="postComment">提交</a>
        </div>
      </div>
    </vue-modal>
    <vue-modal :name="'complaint-modal-' + order.id">
      <div class="comment-content">
        <div>
          <input type="text" v-model="complaint.content" placeholder="投诉内容">
        </div>
      </div>
      <div class="comment-content">
        <div>
          <a class="btn" @click="postComplaint">提交</a>
        </div>
      </div>
    </vue-modal>
  </div>
</template>

<script>
  export default {
    name: "OrderItemDetail",
    props: ['order',"ws"],
    data() {
      return {
        orderItems: [],
        comment: {
          score: 5,
          content: "123"
        },
        complaint: {
          content: ""
        },
        starSize: 20
      }
    },
    created() {
      this.initOrderDetail();
    },
    methods: {
      async initOrderDetail() {
        let params = await this.$http.get(this.$servers.orderDetail(this.order));
        params = params.data;
        console.log(params);
        if (params.status === "1") {
          this.orderItems = params.data["orderItems"];
        }
      },
      cancel(status,order){
        this.createMsg(status,order);
      },
      showCommentModal() {
        this.$modal.show('comment-modal-' + this.order.id)
      },
      showComplaintModal() {
        this.$modal.show('complaint-modal-' + this.order.id)
      },
      countStarWidth(e) {
        let x = e.layerX;
        this.comment.score = parseInt(x / this.starSize) + 1;
      },
      async postComment() {
        this.comment.shopId = this.order.shopId;
        let res = await this.$http.post(this.$servers.postComment() + this.order.id, this.comment);
        let params = res.data;
        if (params.status === "1") {
          this.order["status"] = 7;
          this.$modal.hide('comment-modal-' + this.order.id)
        }
      },
      async postComplaint() {
        this.complaint.shopId = this.order.shopId;
        let res = await this.$http.post(this.$servers.postComplaint(), this.complaint);
        let params = res.data;
        if (params.status === "1") {
          this.$modal.hide('complaint-modal-' + this.order.id)
        }
      },
      createMsg(status, order) {
        order.status = status;
        let senderId = order.client.id;
        let receiverId = order.shopId;
        let msg = {};
        let map = {};
        msg.senderId = senderId;
        msg.receiverId = receiverId;
        msg.map = map;

        map.status = 6;

        //
        let newOrder = {};
        newOrder.id = order.id;
        map.order = newOrder;

        this.ws.send(JSON.stringify(msg));
      }
    }
  }
</script>

<style lang="scss" scoped>

  $star-size: 20px;

  .comment-content {
    display: flex;
    margin-top: 30px;

    & > div {
      margin-left: 100px;
      width: 60%;

    }

    input {
      padding: 5px;
      outline: none;
      width: 394px;
      box-sizing: border-box;
    }

    .star-wrap {
    }

    a {
      width: 100%;
      display: block;
      padding: 10px;
      background-color: gold;
      text-align: center;
      border: 1px solid #e6c100;
    }
  }

  .detail {
    border: 1px solid #ddd;
    border-radius: 2px;
    display: flex;
    width: 90%;
    margin-left: 2px;

    .content {
      width: 50%;
      padding: 15px 25px;
      box-sizing: border-box;

      header {
        font-size: 14px;
        color: #999;
        margin-bottom: 26px;
        font-weight: bold;
      }
    }

    .order {
      border-right: 1px solid #ddd;

      ul {
        margin: 0;
        padding: 0;

        li {
          color: #333;
          padding: 8px 0;
          font-size: 15px;
          display: flex;
          justify-content: space-between;

          span {
            font-size: 24px;
            color: #ff5a5a;
          }

          &:last-child {
            padding: 14px 0;
          }
        }
      }

      .info {
        margin-top: 14px;
        display: block;
        font-size: 13px;
        color: #8c8c8c;

        div {
          margin-top: 5px;
        }
      }
    }

    .status {

      section {
        display: flex;
      }

      .process-bar {
        i {
          display: block;
        }

        .point {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #8c8c8c;
          content: " ";
        }

        .arrow {
          width: 1px;
          height: 42px;
          background-color: #8c8c8c;
          margin: 5px 0 5px 3px;
        }

        .finished {
          background-color: #ffd161;
        }
      }

      .status-bar {
        margin-left: 31px;
        margin-top: -4px;

        div {
          height: 59px;
        }
      }
    }
  }

  .star {
    display: block;
    position: relative;
    height: $star-size * 0.99;
    width: $star-size * 5;
    background-image: url('/static/star-o.png');
    background-size: $star-size $star-size;
    cursor: pointer;

    span {
      position: absolute;
      display: block;
      height: $star-size;
      background-image: url('/static/star.png');
      background-size: $star-size $star-size;
    }
  }


</style>
