<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
        <CategoryCreate @created="addNewCategory"/>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate'

export default {
  name: 'categories',
  data: () => ({
    categories: []
  }),
  components: {
    CategoryCreate
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    }
  }
}
</script>
