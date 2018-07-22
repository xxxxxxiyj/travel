<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <home-command></home-command>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HomeCommand from './components/HomeCommand'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeCommand
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background-color: #eee
</style>
