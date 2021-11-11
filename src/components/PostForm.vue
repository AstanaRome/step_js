<template>
    <form @submit.prevent>
        <input v-model="post.title" class="input" type="text" placeholder="Название" />
        <input v-model="post.body" class="input" type="text" placeholder="Описание" />
        <button class="btn" @click="createPost">Создать</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }

        }


    },
    methods: {
        createPost() {
            console.log(this.post.title);
            this.post.id = Date.now();
            this.$emit('create', this.post, 'secondd', 'third')
            this.post = {
                title: '',
                body: ''
            }
        },
    }



}
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