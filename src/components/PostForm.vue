<template>
  <form @submit.prevent>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script setup>
import { defineEmits } from "vue";
import { ref } from "vue";

const post = {
  title: '',
  body: '',
};

const emit = defineEmits(["create"]);
const createPost = () => {
  post.id = Date.now();
  emit("create", post);
  post.title = ''
post.body = ''
};



</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  color: teal;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
}

.input {
  width: 100%;
  border: 3px solid teal;
  margin-top: 15px;
  padding: 10px 15px;
}
</style>