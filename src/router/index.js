import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
	{
    path: '/',
		redirect: {name: 'Posts'}
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
	{
    path: '/posts/post/:userName/:postId',
    name: 'Post',
    component: Post,
		props: true
  },
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
