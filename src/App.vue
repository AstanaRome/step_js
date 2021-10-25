<template>
  <v-app>
    <v-app-bar app>
     
        <v-app-bar-title>The Movie DataBase</v-app-bar-title>

        <v-spacer />

        <v-btn elevation="0" :to="{ name: 'films' }">Фильмы</v-btn>
        <v-btn elevation="0" :to="{ name: 'actors' }">Персоны</v-btn>
        <v-spacer />
      </v-app-bar>


    <v-main app>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
export default {
  name: "App",
};
</script>


<style lang="scss" scoped>
</style>
