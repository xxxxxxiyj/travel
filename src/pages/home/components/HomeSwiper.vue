<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-slide" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/ec/278a34afb59a0d02.jpg_750x200_3292a705.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/b6/23980fda69a67d02.jpg_750x200_8830c8e2.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff;
  .wrapper
    padding-bottom: 26.67%
    width: 100%
    height: 0
    background: #eee
    overflow: hidden
    .swiper-slide
      width: 100%
</style>
