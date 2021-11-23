<template>
      <div class="col s12 m6 l4">
            <div class="card light-blue bill-card">
              <div class="card-content white-text">
                <span class="card-title">Сумма на счету</span>
                <p class="currency-line">
                  <span>{{bill}}</span>
                </p>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  computed: {
    bill () {
      return (
        this.$store.getters.info.bill
      )
    }
  }
}
</script>
