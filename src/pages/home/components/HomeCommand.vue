<template>
  <div class="command-wrap">
    <h3><img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢</h3>
    <div class="command-item" v-for="item of list" :key=item.title>
      <img class="command-img" :src="item.imgUrl">
      <div class="command-desc">
        <div class="command-title">{{ item.title }}</div>
        <div class="command-star">
          <span class="star-level iconfont">&#xe61a;&#xe61a;&#xe61a;&#xe61a;&#xe61a;</span>
          <span class="comment">{{ item.comment }}条评论</span>
        </div>
        <div class="command-price">
          <span class="price">￥<em class="price-num">{{ item.price }}</em></span>起
          <span class="address">{{ item.address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCommand',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .command-wrap
    margin-top: .2rem
    width: 100%
    background-color: #fff
    h3
      padding: .24rem .2rem .26rem
      font-size: .32rem
    .title-img
      margin-right: .08rem
      width: .3rem
      height: .3rem
    .command-item
      padding: .2rem
      border-bottom: 1px solid #eee
      overflow: hidden
      .command-img
        float: left
        width: 2rem
        height: 2rem
      .command-desc
        padding-left: 2.22rem
        .command-title
          margin-top: .2rem
          font-size: .32rem
          color: #212121
        .command-star
          margin-top: .16rem
          .star-level
            display: inline-block
            margin-right: .35rem
            font-size: .24rem
            color: #ffb436
          .comment
            font-size: .24rem
            color: #616161
        .command-price
          margin-top: .22rem
          .price
            font-size: .24rem
            color: #ff8300
            .price-num
              font-size: .44rem
          .address
            float: right
            color: #616161
</style>
