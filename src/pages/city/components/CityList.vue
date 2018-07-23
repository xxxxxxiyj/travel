<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="hot-city-list">
          <button
            v-for="item of hotCityList"
            :key="item.id"
            @click="HandleCityClick(item.name)"
          >
            {{item.name}}
          </button>
        </div>
      </div>
      <div class="area">
        <div class="title">字母排序</div>
        <div class="alphabet-list">
          <button
            v-for="(item, key) of cityList"
            :key="key"
            @click="HandleLetterClick"
          >
            {{ key }}
          </button>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cityList" :key="key" :ref="key">
        <div class="title">{{ key }}</div>
        <div class="alphabet-city">
          <button
            v-for="inner of item"
            :key="inner.id"
            @click="HandleCityClick(inner.name)"
          >
            {{ inner.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCityList: Array,
    cityList: Object
  },
  data () {
    return {
      letter: ''
    }
  },
  methods: {
    HandleLetterClick (e) {
      this.letter = e.target.innerText
    },
    HandleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position: absolute
    top: .88rem
    height: 13rem
    background-color: #eee
    z-index: 4
    .title
      padding: .2rem .3rem
    .hot-city-list
      width: 100%
      font-size: 0
      button
        width: 33.3%
        height: .8rem
        border-right: 1px solid #ddd
        border-bottom: 1px solid #ddd
        font-size: .28rem
        background-color: #fff
    .alphabet-list
      font-size: 0
      button
        width: calc(100% / 6)
        height: .8rem
        font-size: .28rem
        background-color: #fff
    .alphabet-city
      font-size: 0
      button
        width: calc(100% / 4)
        height: .8rem
        border-right: 1px solid #ddd
        border-bottom: 1px solid #ddd
        font-size: .28rem
        background-color: #fff
</style>
