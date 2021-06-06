import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import input from "./input"
import Row from "./row"
import Col from "./col"
//全局组件
Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", input)
Vue.component("g-col", Col)
Vue.component("g-row", Row)

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: "hi"
  },
  created() {
    setTimeout(() => {
      let event = new Event("change")
      let inputElement = this.$el.querySelector("input")
      inputElement.dispatchEvent(event)
    }, 3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }

})

