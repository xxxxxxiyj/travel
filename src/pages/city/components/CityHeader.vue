<template>
  <div class="header">
    <div class="header-wrap">
      <span class="iconfont back">&#xe66a;</span>
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
    font-size: .4rem
</style>
