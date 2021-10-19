<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'main' }" class="logo"> Кинотеатр </router-link>
      <div class="links">Фильмы</div>
      <img
        class="img_film"
        src="https://avatars.mds.yandex.net/get-zen_doc/176438/pub_5e9af60dcb38e160287afbc4_5e9af69cfd59420be5ff40b9/scale_1200"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
};
</script>



<style lang="scss" scoped>
header {
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