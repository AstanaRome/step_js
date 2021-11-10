<script setup>
import { ref } from 'vue'


const posts =  ref([
  { id: 1, title: "Javascript", body: "Описание поста" },
  { id: 2, title: "Javascript 2", body: "Описание поста 2" },
  { id: 3, title: "Javascript 3", body: "Описание поста 3" },
  { id: 4, title: "Javascript 4", body: "Описание поста 4" },
]);

const title1 =  ref('');
const body = ref('');

const createPost = () => {
  
 
  console.log(title1);

  const newPost = {
  
    id: posts.value.length + 1,
    title: title1,
    body: body,
  };
  posts.value.push(newPost);



};


</script>

<template>
  <div class="app">
    <h4>Создание поста</h4>
    <form @submit.prevent >
      <input
        v-bind:value="title1"
        @input="title1 = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"
      />
      <button class="btn" @click="createPost">Создать</button>
    </form>

    <div class="post" v-for="post in posts" :post="post"  :key="post.id">
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
}

.app {
  padding: 20px;
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

.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 3px solid teal;
  margin-top: 15px;
  padding: 10px 15px;
}
</style>
