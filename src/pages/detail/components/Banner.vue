<template>
  <div>
    <div class="banner-wrap" @click="HandleGallaryClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
      <div class="banner-info">
        <div class="img-num">
          <span class="iconfont icon-img">&#xe626;</span>
          <span class="num">10</span>
        </div>
        <div class="detail-title">故宫(AAAAA景区)</div>
      </div>
      <div class="back-wrap">
        <span class="iconfont icon-back"></span>
      </div>
    </div>
    <gallary @close="HandleGallaryClose" v-if="showGallary"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
export default {
  name: 'Banner',
  components: {
    Gallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    HandleGallaryClose () {
      this.showGallary = false
    },
    HandleGallaryClick () {
      this.showGallary = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner-wrap
    position: relative
    padding-bottom: 55%
    width: 100%
    height: 0
    overflow: hidden
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      bottom: 0
      padding-left: .35rem
      padding-bottom: .2rem
      width: 100%
      line-height: .35rem
      color: #fff
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .img-num
        width: 1.2rem
        height: .4rem
        line-height: .4rem
        font-size: .24rem
        text-align: center
        border-radius: .2rem
        background-color: rgba(0, 0, 0, .5)
        .num
          position: relative
          top: -0.03rem
      .detail-title
        margin-top: .2rem
        font-size: .36rem
    .back-wrap
      position: absolute
      top: .2rem
      left: .2rem
      width: .8rem
      height: .8rem
      line-height: .8rem
      border-radius: 50%
      text-align: center
      background: rgba(0, 0, 0, .5)
      .icon-back
        font-size: .36rem
        color: #fff
</style>
