<template>
  <div id="app">
    <div class="container">
      <router-link :to="{ name: 'main' }" class="logo"> Кинотеатр </router-link>
      <router-link :to="{ name: 'films' }" class="logo"> Фильмы </router-link>
      <router-link :to="{ name: 'actors' }" class="logo"> Актеры </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "App",
};
</script>


<style lang="scss" scoped>
#app {
  background-color: #0c0c0c;
  padding: 20px 0;
  .container {
    margin-top: 0;
    display: flex;
    align-items: baseline;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #ffffff;
    font-size: 25px;
  }

  .logo {
    color: #eb5804;
    font-size: 30px;
    margin-right: 50px;
  }

  .links {
    margin-left: 75px;
    display: flex;
    flex-grow: 1;
  }

  button {
    margin-left: auto;
  }

  .img_film {
    position: absolute;
    top: 200px;
  }
}
</style>
