<template>
    <div class="home">
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icon :list="iconList"></home-icon>
      <hot-list :list="hotList"></hot-list>
      <home-command :list="commandList"></home-command>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcon from './components/HomeIcon'
import HotList from './components/HotList'
import HomeCommand from './components/HomeCommand'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HotList,
    HomeCommand
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      hotList: [],
      commandList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('./api/index.json?city=' + this.city)
        .then(this.getHomeInfoSuc)
    },
    getHomeInfoSuc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.hotList = data.hotList
        this.commandList = data.recommendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background-color: #eee
</style>
