<template>
  <div class="city">
    <city-header></city-header>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CityList from './components/CityList'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList
  }
}
</script>

<style lang="stylus" scoped>
  .city
    color: #212121
    background-color: #eee
</style>
