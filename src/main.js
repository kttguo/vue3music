import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'
// import { Button } from 'vant';  //引入vant组件
const app=createApp(App)
getVant(app)
// app.use(Button) //注册vant组件
app.use(store)
app.use(router).mount('#app')
