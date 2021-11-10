<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
const posts = [
  { id: 1, title: "Jayacript", body: "Описание поста" },
  { id: 2, title: "jayacript 2", body: "Описание поста 2" },
  { id: 3, title: "Jaygcript 3", body: "Описание поста 3" },
  { id: 4, title: "Javacript41", body: "Описание поста 4" },
];
console.log(posts)
</script>

<template>

  <div  class="post" v-for="post in posts" :post="post" :key="post.id">
   <div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
  
</template>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
