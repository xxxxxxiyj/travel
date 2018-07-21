<template>
  <div class="icon-wrap">
    <swiper class="swiper-wrap" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon-item" v-for="item of page" :key="item.id">
          <img class="icon-img" :src=item.imgUrl />
            <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      pagination: '.swiper-pagination',
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '北京必游'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '文化古迹'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
          desc: '公园'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variable.styl'
@import '~style/mixins.styl'
  .icon-wrap >>> .swiper-pagination-bullet-active
    background: $bgColor
  .icon-wrap >>> .swiper-wrap
    padding-bottom: 50%
    width: 100%
    height: 0
    .icon-item
      float: left
      position: relative
      padding-left: .1rem
      padding-right: .1rem
      padding-bottom: 22%
      width: 25%
      height: 0
      box-sizing: border-box
      .icon-img
        position: absolute
        left: 0
        top: .1rem
        bottom: .2rem
        right: 0
        margin: 0 auto
        width: 60%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: .1rem
        padding-left: .3rem
        padding-right: .3rem
        color: $darkColor
        text-align: center
        ellipsis()
</style>
