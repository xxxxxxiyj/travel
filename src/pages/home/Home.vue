<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icon></home-icon>
      <hot-list></hot-list>
      <home-command></home-command>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HotList from './components/HotList'
import HomeCommand from './components/HomeCommand'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HotList,
    HomeCommand
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background-color: #eee
</style>
