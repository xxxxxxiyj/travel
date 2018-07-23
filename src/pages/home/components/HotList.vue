<template>
  <div class="list-wrap">
    <div class="title">
      <div class="all-list">全部榜单<span class="iconfont">&#xe64d;</span></div>
      <h3>
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
        <span>本周热门榜单</span>
      </h3>
    </div>
    <div class="list">
      <router-link
        tag="div"
        class="list-item"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="list-img" :src="item.imgUrl">
        <div class="place">{{ item.title }}</div>
        <div class="price">￥{{ item.price }}<span class="normal">起</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .list-wrap
    margin-top: .2rem
    background-color: #fff
    .title
      position: relative
      .all-list
        position: absolute
        right: .2rem
        top: .2rem
        color: #616161
        span
          font-size: .28rem
      h3
        padding: .24rem .2rem .26rem
        font-size: .32rem
        .title-img
          width: .3rem
          height: .3rem
    .list
      padding: 0 .24rem
      white-space: nowrap
      overflow-x: scroll
      .list-item
        display: inline-block
        padding: .06rem 0 .2rem
        margin-right: .1rem
        width: 2rem
        font-size: .24rem
        text-align: center
        border-bottom: 1px solid #eee
        .list-img
          width: 2rem
          height: 2rem
        .place
          margin: .1rem
          color: #212121
          ellipsis()
        .price
          color: #ff8300
          .normal
            color: #616161
</style>
