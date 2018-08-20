<template>
  <div class="container" @click="HandleGalleryClick">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of list" :key="index">
          <img class="swiper-slide" :src="item">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    HandleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    z-index: 6
</style>
