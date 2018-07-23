<template>
  <div class="header">
    <div class="header-wrap">
      <router-link to="/">
        <span class="iconfont back">&#xe66a;</span>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/variable.styl'
  .header
    position: absolute
    top: 0
    width: 100%
    z-index: 5
    .header-wrap
      width: 100%
      height: .88rem
      line-height: .88rem
      font-size: .32rem
      text-align: center
      color: #fff
      background-color: $bgColor
      .back
        position: absolute
        left: .2rem
        font-size: .32rem
        color: #fff
</style>
