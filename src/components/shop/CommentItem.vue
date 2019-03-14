<template>
  <div class="comment-item">
    <header>
      <div class="middle">
        <div class="user-name">{{comment.id}}</div>
        <div style="margin-left: 16px">
            <span class="star">
                  <span :style="{width: (13.9 * comment.score) + 'px'}"></span>
                </span>
        </div>
      </div>
      <div class="date middle">
        {{new Date(comment.commentTime).format("yyyy-MM-dd hh:mm:ss")}}
      </div>
    </header>
    <section class="content">
      {{comment.content}}
    </section>
  </div>
</template>

<script>
  export default {
    name: "CommentItem",
    props: ["comment"],
    created() {
      console.log(this.comment);
    }
  }
</script>

<style lang="scss" scoped>
  $star-size: 14px;

  .comment-item {

    header {
      justify-content: space-between;
      padding-right: 50px;
      display: flex;


      .date {
        color: #8c8c8c;
      }
    }
  }

  .star {
    display: block;
    position: relative;
    height: $star-size;
    width: $star-size * 4.85;
    background-image: url('/static/star-o.png');
    background-size: $star-size $star-size;

    span {
      position: absolute;
      display: block;
      height: $star-size;
      background-image: url('/static/star.png');
      background-size: $star-size $star-size;
    }
  }
  .user-name{
    font-size: 14px;
    margin-right: 16px;
    color: #333;
    font-weight: bold;
  }

  .content{
    font-size: 14px;
    margin-top: 10px;
    line-height: 25px;
    color: #666;
    word-wrap: break-word;
  }

</style>
