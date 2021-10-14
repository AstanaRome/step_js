<template>
  <div class="container" ref="container"></div>
</template>

<script>
import leaflet from "leaflet";

export default {
  props:['country'],
  
  data: () => ({
    map:null,
  }),
  mounted() {
    this.map = L.map(this.$refs.container);
    this.map.setView([0, 0], 1);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      this.map
    );
  },
  watch:{
    country(){
      const lat = this.country.lat;
      const long = this.country.long;
      console.log(long);
      console.log(lat);
      this.map.setView([lat,long], 4);

    }
  }
};
</script>

<style scoped>
@import "leaflet/dist/leaflet.css";

.container {
  height: 200px;
}
</style>