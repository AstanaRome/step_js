<script setup>
import { ref } from 'vue'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'


const posts = ref([
  { id: 1, title: "Javascript", body: "Описание поста" },
  { id: 2, title: "Javascript 2", body: "Описание поста 2" },
  { id: 3, title: "Javascript 3", body: "Описание поста 3" },
  { id: 4, title: "Javascript 4", body: "Описание поста 4" },
]);

const title = ref('');
const body = ref('');

const _createPost = (post, second, third) => {
posts.value.push(post);
};


</script>

<template>
  <div class="app">
    <post-form
    @create = _createPost
    ></post-form>
    <post-list 
    :posts="posts"
   
    ></post-list>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
