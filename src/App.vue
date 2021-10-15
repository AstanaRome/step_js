
<template>
  <div>
    <button class="btn1" @click="getImage">Change</button>
    <h2>Image:</h2>

    <img v-bind:src="image" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      image: "https://purr.objects-us-east-1.dream.io/i/2n5E8yZ.jpg",
    };
  },

  methods: {
    getImage() {
      console.log("Gelr");
      axios.get("https://aws.random.cat/meow").then((response) => {
        const data = response.data.file;
        this.image = data;
      });
    },
  },
};
</script>

<style scoped>
.btn1 {
  font-size: 20px;
  color: white;
  background-color: black;
}
</style>