<template>
  <div>
    <div class="app-main-layout">
      <div>
        <div class="page-title">
          <h3>Счет</h3>
        </div>
        <div class="row">
          <HomeBill></HomeBill>
        </div>
      </div>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
export default {
  name: 'Home',
  components: {
    HomeBill
  }
}
</script>
