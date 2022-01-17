/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-12-10 10:18:12
 * @LastEditTime: 2021-12-10 10:59:25
 * @LastEditors: MArio
 */
import Vue from 'vue'
import App from './App.vue'
import AtComponents from "at-ui"
import 'at-ui-style'
import store from './store'


Vue.config.productionTip = false

Vue.use(AtComponents)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
