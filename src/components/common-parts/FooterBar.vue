<template>
  <div class="page-footer">
    <div class="footer-wrap container">
      <div class="column fl corp">
        <ul>
          <li><a name="kd-href" href="http://kd.meituan.com/" class="kaidian_address" target="_blank">开店申请</a></li>
          <li><a href="http://page.peisong.meituan.com/apply/join" target="_blank">配送加盟</a></li>
          <li><a href="/help/agent" target="_blank">城市代理</a></li>
          <li><a href="http://kd.meituan.com/zhaoshang/pages/WMInvest.html" target="_blank">零售加盟</a></li>
        </ul>
      </div>
      <div class="column fl info">
        <ul>
          <li><a href="http://developer.meituan.com?applyFrom=waimai_c_pc_contact" target="_blank">开放平台</a></li>
          <li><a href="http://www.meituan.com/about/" target="_blank" rel="nofollow">关于美团</a></li>
          <li><a href="http://www.meituan.com/about/press" target="_blank" rel="nofollow">媒体报道</a></li>
          <li><a href="/help/rule" target="_blank" rel="nofollow">平台制度</a></li>
        </ul>
      </div>
      <div class="column fl ques">
        <ul>
          <li><a href="/help/faq" target="_blank" rel="nofollow">常见问题</a></li>
          <li><a href="/help/feedback" target="_blank" rel="nofollow">用户反馈</a></li>
          <li><a href="/help/inform" target="_blank" rel="nofollow">诚信举报</a></li>
          <li><a href="/help/job" target="_blank" rel="nofollow">加入我们</a></li>
        </ul>
      </div>
      <div class="column fl service">
        <div class="details">
          <p class="w2">1010-9777</p>
          <!-- <p class="w2">4008508888</p> -->
          <!-- <p class="w2">010-56652722</p> -->

          <p class="w3">周一至周日 9:00-23:00</p>

          <p class="w3">客服不受理商务合作</p>
        </div>
      </div>
      <div class="QRcode fl">
        <div class="footer-qrcode fl"></div>
        <div class="fl">
          <p class="qr-text1">小程序下单</p>
          <p class="qr-text2">更多商家，更多优惠</p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterBar"
    }
</script>

<style lang="scss" scoped>
  .page-footer{
    display: flex;
    background-color: #FFF;
    margin-top: 32px;

    .footer-wrap{
      display: flex;

      .column{
        margin: 20px 80px 20px 0;

        li{
          padding: 7px 0;
          a{
            color: #333333;
          }
        }
      }

      .service{
        margin-top: 27px;
      }

      .QRcode{
        margin-top: 27px;
      }
      .ques{
        border-right: 1px solid #ddd;
        padding-right: 50px;
      }
    }
    margin-bottom: 60px;
  }
</style>
