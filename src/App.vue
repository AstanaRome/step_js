<template>
  <div>
    esfe
    <input type="text" v-model="cityFrom" placeholder="Нур-Султан" id="city1" />
    <input type="text" v-model="cityTo" placeholder="Караганда" id="city2" />

    <button @click="GetDistance">Рассчитать</button>
    <p>
      <span>Расстояние: {{ Distance }} км</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: null,
    coord1: null,
    coord2: null,
    cityFrom: null,
    cityTo: null,
    Distance: null,
  }),
  mounted() {},

  methods: {
    GetDistance() {
      this.loadData();
    },

    func1(p1, p2) {
      var R = 6378137; // Earth’s mean radius in meter
      var dLat = this.func2(p2.lat - p1.lat);
      var dLong = this.func2(p2.lng - p1.lng);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.func2(p1.lat)) *
          Math.cos(this.func2(p2.lat)) *
          Math.sin(dLong / 2) *
          Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;

      this.Distance = d / 1000;
    },
    func2(x) {
      return (x * Math.PI) / 180;
    },

    loadData() {
      this.loading = true;

      const requestOne = axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            q: this.cityFrom,
            key: "32a8166966dc48de935a25e83cd5c42e",
            language: "ru",
            pertty: 1,
          },
        }
      );
      const requestTwo = axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            q: this.cityTo,
            key: "32a8166966dc48de935a25e83cd5c42e",
            language: "ru",
            pertty: 1,
          },
        }
      );

      axios
        .all([requestOne, requestTwo])
        .then((response) => {
          this.coord1 = response[0].data.results[0].geometry;
          this.coord2 = response[1].data.results[0].geometry;
        })
        .finally(() => {
          this.loading = false;
        });

      setTimeout(this.func1(this.coord1, this.coord2), 3000);
    },
  },
};
</script>

<style>
</style>