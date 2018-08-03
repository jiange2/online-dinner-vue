<template>
    <div class="comment-item">
      <header>
        <div class="middle">
          <div class="user-name" style="margin-right: 18px;">用户名</div>
          <div>
            <span class="star">
                  <span style="width: 44px"></span>
                </span>
          </div>
        </div>
        <div class="date middle">
          2018-07-27
        </div>
      </header>
      <section>
        很喜欢#劲爆鸡米花##劲爆鸡米花##劲爆鸡米花#
      </section>
    </div>
</template>

<script>
    export default {
        name: "CommentItem"
    }
</script>

<style lang="scss" scoped>
  $star-size: 14px;

  .comment-item{
    padding: 5px 20px;

    header{
      justify-content: space-between;
      padding-right: 50px;
      display: flex;

      .user-name{
        font-weight: 700;
        margin: 10px 0;
      }
      .date{
        color: #8c8c8c;
      }
    }
  }

  .star {
    display: block;
    position: relative;
    height: $star-size;
    width: $star-size * 5;
    background-image: url('/static/star-o.png');
    background-size: $star-size $star-size;

    span {
      position: absolute;
      display: block;
      height: $star-size;
      width: $star-size * 3.5;
      background-image: url('/static/star.png');
      background-size: $star-size $star-size;
    }
  }
</style>
