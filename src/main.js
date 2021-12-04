/*
 * @Author: 24min
 * @Date: 2021-12-04 13:12:44
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-04 13:34:00
 * @FilePath: \ip-input\src\main.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
import Vue from 'vue'
import App from './App.vue'
import { Input } from 'ant-design-vue'
Vue.config.productionTip = false

Vue.use(Input);
new Vue({
    render: h => h(App),
}).$mount('#app')