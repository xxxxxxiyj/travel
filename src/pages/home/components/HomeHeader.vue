<template>
    <div class="header">
        <div class="left">
          <span class="iconfont back-icon">&#xe66a;</span>
        </div>
        <div class="mid">
          <span class="iconfont">&#xe61d;</span>
          输入城市/景点
        </div>
        <router-link to="/city">
          <div class="right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe623;</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/variable.styl'
@import '~style/mixins.styl'
  .header
    display: flex
    width: 100%
    height: .88rem
    line-height: .88rem
    background-color: #f8c43a
    color: #fff
    .left
      float: left
      width: .6rem
      text-align: center
      .left-icon
        font-size: .7rem
    .mid
      flex: 1
      margin-top: .12rem
      padding-left: .2rem
      height: .64rem
      line-height: .64rem
      border-radius: .2rem
      background-color: #fff
      color: #999
    .right
      float: right
      min-width: 1.04rem
      padding-left: .03rem
      padding-right: .05rem
      text-align: center
      color: #fff
      ellipsis()
      .arrow-icon
        font-size: .2rem
        margin-left: .08rem
</style>
