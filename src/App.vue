<template>
  <div>
    <div v-if="loading">Loading...</div>

    <div v-else-if="countries != null">
      <select v-model="selectedCountry">
        <option v-for="(country, index) in Object.keys(countries)" :key="index">
          {{ country }}
        </option>
      </select>

      <div v-if="selectedCountry != null">
        <ul>
          <li>Confirmed - {{ stats().confirmed }}</li>
          <li>Deaths - {{ stats().deaths }}</li>
          <li>
            Percentage -
            {{
              Math.round(((stats().deaths * 100) / stats().confirmed) * 100) /
              100
            }}%
          </li>
        </ul>
      </div>
    </div>

    <countries-map 
    v-if="!loading&&countries !=null" 
    :country="selectedCountry && countries[selectedCountry]['All']"></countries-map>
  </div>
</template>

<script>
import axios from "axios";
import CountriesMap from './components/CountriesMap';

export default {
  components: { CountriesMap },
  data: () => ({
    countries: null,
    selectedCountry: null,
    loading: false,
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;

      axios
        .get("https://covid-api.mmediagroup.fr/v1/cases")
        .then((response) => {
          this.countries = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    stats() {
      return this.countries[this.selectedCountry]["All"];
    },
  },
};
</script>



<style scoped>
@import "../node_modules/leaflet/dist/leaflet.css";
</style>