import Vue from 'vue'
import HeyUI from 'heyui-gson'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/app.less'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

VXETable.setup({
    table: {
        border: true,
        stripe: true,
        size: 'mini'
    }
})
Vue.use(HeyUI)
Vue.use(VXETable)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
