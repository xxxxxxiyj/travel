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
      <div class="list-item" v-for="item of hotList" :key="item.id">
        <img class="list-img" :src="item.imgUrl">
        <div class="place">{{ item.title }}</div>
        <div class="price">￥{{ item.price }}<span class="normal">起</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotList',
  data () {
    return {
      hotList: [
        {
          id: '00001',
          title: '故宫',
          price: '20',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg'
        },
        {
          id: '00002',
          title: '水立方',
          price: '14',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg'
        },
        {
          id: '00003',
          title: '八达岭长城',
          price: '25',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg'
        },
        {
          id: '00004',
          title: '故宫',
          price: '20',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_150x150_06cb3e52.jpg'
        },
        {
          id: '00005',
          title: '水立方',
          price: '14',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg'
        },
        {
          id: '00006',
          title: '八达岭长城',
          price: '25',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_150x150_2dec3e78.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
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
        .price
          color: #ff8300
          .normal
            color: #616161
</style>
