import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardView,
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'projects',
        name: 'projects',
        component: ProjectsView,
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - TaskFlow` || 'TaskFlow'
  next()
})

export default router
