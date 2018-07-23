<template>
  <div class="city">
    <city-header></city-header>
    <city-list
      :hotCityList="hotCityList"
      :cityList="cityList"
    ></city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CityList from './components/CityList'
export default {
  name: 'City',
  data () {
    return {
      hotCityList: [],
      cityList: {}
    }
  },
  components: {
    CityHeader,
    CityList
  },
  methods: {
    getCity () {
      axios.get('/api/city.json')
        .then(this.getCityData)
    },
    getCityData (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCityList = data.hotCities
        this.cityList = data.cities
      }
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style lang="stylus" scoped>
  .city
    color: #212121
    background-color: #eee
</style>
