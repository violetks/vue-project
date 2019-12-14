import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/posts/index'
  },
  {
    path: '/posts/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: '/posts/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/posts/:id/edit',
    name: 'edit-article',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
