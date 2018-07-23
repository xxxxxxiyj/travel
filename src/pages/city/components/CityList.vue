<template>
  <div>
    <div class="area">
      <div class="title">热门城市</div>
      <div class="hot-city-list">
        <button>北京</button>
        <button>北京</button>
        <button>北京</button>
      </div>
    </div>
    <div class="area">
      <div class="title">字母排序</div>
      <div class="alphabet-list">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>C</button>
        <button>C</button>
        <button>C</button>
      </div>
    </div>
    <div class="area">
      <div class="title">A</div>
      <div class="alphabet-city">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>C</button>
        <button>C</button>
        <button>C</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
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
