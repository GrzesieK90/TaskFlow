import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/ProjectsView.vue'),
        meta: {
          title: 'Projects'
        }
      },
      {
        path: 'projects/:id',
        name: 'project-details',
        component: () => import('@/views/ProjectDetailsView.vue'),
        meta: {
          title: 'Project Details'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - TaskFlow` || 'TaskFlow'
  next()
})

export default router
