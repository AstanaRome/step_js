
<template>
  <div class="post" v-for="post in posts" :post="post" :key="post.id">
    <div>{{ post.id }}</div>
    <div>
      <strong>Название:</strong>
      {{ post.title }}
    </div>
    <div>
      <strong>Описание:</strong>
      {{ post.body }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Array,
});
</script>

<style>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
}
</style>



