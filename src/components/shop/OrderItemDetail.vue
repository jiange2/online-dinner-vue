<template>
  <div class="detail">
    <div class="content order">
      <header>订单详情</header>
      <section>
        <ul>
          <li>
            <div class="recipe-name">
              item.recipeName
            </div>
            <div>
              ¥item.price * item.count
            </div>
          </li>
          <li style="border-bottom: 1px dashed #ddd;">
            <div>
              配送费
            </div>
            <div>
              ¥10
            </div>
          </li>
          <li style="margin-top: 14px;border-bottom: 1px dashed #ddd;">
            <div></div>
            <div style="font-size: 13px;color: #333333">实际支付：<span>¥10</span></div>
          </li>
          <li class="info" style="">
            <div>地址：广东工业大学西三 (755)</div>
            <div>电话：18826137225</div>
            <div>备注：（无）</div>
            <div></div>
         </li>
        </ul>
      </section>
    </div>
    <div class="content status">
      <header>订单状态</header>
      <section>
        <div class="process-bar">
          <i class="point finished"></i>
          <i class="arrow finished"></i>
          <i class="point finished"></i>
          <i class="arrow"></i>
          <i class="point"></i>
          <i class="arrow"></i>
          <i class="point"></i>
        </div>
        <div class="status-bar">
          <div>
            订单提交成功，等待付款
          </div>
          <div>
            支付成功，等待商家接单
          </div>
          <div>
            商家接单，制作配送中
          </div>
          <div>
            订单完成
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderItemDetail"
  }
</script>

<style lang="scss" scoped>
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

      ul{
        margin: 0;
        padding: 0;

        li{
          color: #333;
          padding: 8px 0;
          font-size: 15px;
          display: flex;
          justify-content: space-between;

          span{
            font-size: 24px;
            color: #ff5a5a;
          }

          &:last-child{
            padding: 14px 0;
          }
        }
      }

      .info{
        margin-top: 14px;
        display: block;
        font-size: 13px;
        color: #8c8c8c;

        div{
          margin-top: 5px;
        }
      }
    }

    .status{

      section{
        display: flex;
      }

      .process-bar{
        i{
          display: block;
        }

        .point{
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #8c8c8c;
          content: " ";
        }

        .arrow{
          width: 1px;
          height: 42px;
          background-color: #8c8c8c;
          margin: 5px 0 5px 3px;
        }

        .finished{
          background-color: #ffd161;
        }
      }

      .status-bar{
        margin-left: 31px;
        margin-top: -4px;

        div{
          height: 59px;
        }
      }
    }
  }
</style>
