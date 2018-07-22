<template>
  <div class="command-wrap">
    <h3><img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢</h3>
    <div class="command-item" v-for="item of commandList" :key=item.title>
      <img class="command-img" :src="item.imgUrl">
      <div class="command-desc">
        <div class="command-title">{{ item.title }}</div>
        <div class="command-star">
          <span class="star-level iconfont">&#xe61a;&#xe61a;&#xe61a;&#xe61a;&#xe61a;</span>
          <span class="comment">1354条评论</span>
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
  data () {
    return {
      commandList: [
        {
          title: '金海湖风景区',
          comment: '1354',
          price: '24',
          address: '平谷区',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_200x200_36727f69.jpg'
        },
        {
          title: '北京国际鲜花港',
          comment: '1921',
          price: '24.9',
          address: '顺义区',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg'
        },
        {
          title: '北京欢乐谷',
          comment: '55205',
          price: '49',
          address: '朝阳区',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg'
        }
      ]
    }
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
