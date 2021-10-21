<template>

<div>esfe
    {{name}}
</div>

</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: null,
  }),
mounted() {
    this.loadData();
  },
  methods: {
   loadData() {
      this.loading = true;
      axios
        .get("https://api.opencagedata.com/geocode/v1/json?q=Moscow&key=32a8166966dc48de935a25e83cd5c42e&language=ru&pretty=1")
        .then((response) => {
          this.name = response.data.results[0].geometry;
          console.log(this.name)
        })
        .finally(() => {
          this.loading = false;
        });
    },


  },
};
</script>

<style>
</style>