import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHashHistory('https://grzesiek90.github.io/TaskFlow/'),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projects'
      }
    }
  ]
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - TaskFlow` || 'TaskFlow'
  next()
})

export default router
