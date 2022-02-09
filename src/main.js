import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import PostList from "./components/PostList.vue";

Vue.component('PostList', PostList)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
	created() {
		this.$store.dispatch('setPostsUsers')

	}
}).$mount('#app')
