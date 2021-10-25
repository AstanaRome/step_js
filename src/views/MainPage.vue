<template>
  <div class="main-page">
     <h1>
      Онлайн кинотеатр
    </h1>

<button type="button" class="btn btn-outline-light" @click="$router.push({ name: 'films' })">Перейти к фильмам</button>
 
  </div>
</template>

<script>
export default {
  name: 'ffff',
  data() {
    return {
      text: 'Hello world!',
      
    };
  },
};
</script>

<style lang="scss" scoped>
 
</style>