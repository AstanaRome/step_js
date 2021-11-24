import Vue from 'vue'
import M from 'materialize-css'
export default {
  install () {
    Vue.prototype.$message = function (text) {
      M.toast({ html: text })
    }

    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}` })
    }
  }
}