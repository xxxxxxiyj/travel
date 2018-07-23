export default {
  changeCity (state, city) {
    state.city = city
    try {
      if (localStorage.getItem('city')) {
        localStorage.setItem('city', city)
      }
    } catch (e) {}
  }
}
