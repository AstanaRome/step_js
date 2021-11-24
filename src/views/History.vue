<template>
  <div>
    <div class="app-main-layout">
      <div>
        <div class="page-title">
          <h3>История записей</h3>
        </div>

        <div class="history-chart">
          <canvas ref="canvas"></canvas>
        </div>
        <Loader v-if="loading" />
        <p class="center" v-else-if="!records.length">
          Записи отсутвуют
          <router-link to="record">Добавьте первую запись</router-link>
        </p>
        <section v-else>
          <p>
            <label>
              <input class="with-gap" name="type" type="radio" value="income" v-model="type" />
              <span>Доход</span>
            </label>
          </p>

          <p>
            <label>
              <input class="with-gap" name="type" type="radio" value="outcome" v-model="type" />
              <span>Расход</span>
            </label>
          </p>
          <button @click="refresh">OK</button>
          <HistoryTable :records="records" />
        </section>
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
import HistoryTable from '@/components/HistoryTable'
import Loader from '../components/app/Loader.vue'
import { Pie } from 'vue-chartjs'
export default {
  name: 'history',
  extends: Pie,
  data: () => ({
    type: 'outcome',
    loading: true,
    records: [],
    categories: []
  }),
  async mounted () {
    // this.records - await this.$store.dispatch('fetchRecords')
    const records = await this.$store.dispatch('fetchRecords')
    this.categories = await this.$store.dispatch('fetchCategories')
    this.records = records.map(record => {
      return {
        ...record,
        categoryName: this.categories.find(c => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText: record.type === 'income' ? 'Доход' : 'Расход'
      }
    })
    this.renderChart({
      labels: this.categories.map(c => c.title),
      datasets: [
        {
          data: this.categories.map(c => {
            return this.records.reduce((total, r) => {
              if (r.categoryId === c.id && r.type === this.type) {
                total += +r.amount
              }
              return total
            }, 0)
          }),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    })
    this.loading = false
  },
  methods: {
    refresh () {
      this.renderChart({
        labels: this.categories.map(c => c.title),
        datasets: [
          {
            data: this.categories.map(c => {
              return this.records.reduce((total, r) => {
                if (r.categoryId === c.id && r.type === this.type) {
                  total += +r.amount
                }
                return total
              }, 0)
            }),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      })
    }
  },
  components: {
    HistoryTable,
    Loader
  }
}
</script>
