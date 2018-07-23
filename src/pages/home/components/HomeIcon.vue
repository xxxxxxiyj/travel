<template>
  <div class="icon-wrap">
    <swiper class="swiper-wrap" :options="swiperOption" v-if="showIcon">
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcon () {
      return this.list.length
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
  .icon-wrap
    background-color: #fff
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
