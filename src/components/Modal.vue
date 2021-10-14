<template>
  <div class="modal" v-if="open">

    <div class="modal-overlay" @click="onClose"></div>
    <div class="modal-content">
        <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
    props: ['open'],
    methods: {
      onClose() {
        this.$emit('close');
      }
    }
};
</script>

<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}

.modal-content {
  background: #fff;
  padding: 10px;
  position: relative;
  max-width: 300px;
}
</style>