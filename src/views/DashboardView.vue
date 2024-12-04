<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <!-- Statystyki projektów -->
    <ProjectStatistics :stats="projectStats" />

    <!-- Oś czasu aktywności -->
    <ActivityTimeline :items="timelineItems" />

    <!-- Ostatnie projekty -->
    <div class="recent-projects">
      <h2>Recent Projects</h2>
      <div class="projects-grid">
        <div v-for="project in recentProjects" :key="project.id" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-meta">
            <span :class="['status', project.status]">{{ project.status }}</span>
            <span :class="['priority', project.priority]">{{ project.priority }}</span>
          </div>
          <RouterLink :to="'/projects/' + project.id" class="view-project">
            View Details
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '@/stores/projects'
import { useGithubStore } from '@/stores/github'
import ProjectStatistics from '@/components/dashboard/ProjectStatistics.vue'
import ActivityTimeline from '@/components/dashboard/ActivityTimeline.vue'
import type { ProjectStats, TimelineItem } from '@/types'

const projectStore = useProjectStore()
const githubStore = useGithubStore()

// Obliczanie statystyk projektów
const projectStats = computed<ProjectStats>(() => {
  const projects = projectStore.projects
  const stats: ProjectStats = {
    total: projects.length,
    byStatus: {
      active: projects.filter((p) => p.status === 'active').length,
      completed: projects.filter((p) => p.status === 'completed').length,
      'on-hold': projects.filter((p) => p.status === 'on-hold').length,
    },
    byPriority: {
      high: projects.filter((p) => p.priority === 'high').length,
      medium: projects.filter((p) => p.priority === 'medium').length,
      low: projects.filter((p) => p.priority === 'low').length,
    },
    tasksStats: {
      total: projects.reduce((acc, p) => acc + p.tasks.length, 0),
      completed: projects.reduce(
        (acc, p) => acc + p.tasks.filter((t) => t.status === 'completed').length,
        0,
      ),
      inProgress: projects.reduce(
        (acc, p) => acc + p.tasks.filter((t) => t.status === 'in-progress').length,
        0,
      ),
      todo: projects.reduce((acc, p) => acc + p.tasks.filter((t) => t.status === 'todo').length, 0),
      overdue: projects.reduce(
        (acc, p) =>
          acc +
          p.tasks.filter((t) => {
            const dueDate = t.dueDate ? new Date(t.dueDate) : undefined
            return t.status !== 'completed' && dueDate && dueDate < new Date()
          }).length,
        0,
      ),
    },
    githubStats: {
      totalRepos: projects.filter((p) => p.githubRepo).length,
      totalIssues: githubStore.issues.length,
      totalPRs: githubStore.pullRequests.length,
      totalCommits: githubStore.commits.length,
    },
  }
  return stats
})

// Generowanie elementów osi czasu
const timelineItems = computed<TimelineItem[]>(() => {
  const items: TimelineItem[] = []

  // Dodawanie projektów do osi czasu
  projectStore.projects.forEach((project) => {
    items.push({
      id: `project-${project.id}`,
      type: 'project',
      title: project.title,
      date: project.createdAt,
      status: project.status,
      priority: project.priority,
    })

    // Dodawanie zadań do osi czasu
    project.tasks.forEach((task) => {
      items.push({
        id: `task-${task.id}`,
        type: 'task',
        title: task.title,
        date: task.createdAt,
        status: task.status,
        priority: task.priority,
        projectId: project.id,
        projectTitle: project.title,
      })
    })
  })

  // Sortowanie według daty (od najnowszych)
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10) // Pokazuj tylko 10 najnowszych elementów
})

// Ostatnie projekty
const recentProjects = computed(() =>
  [...projectStore.projects]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4),
)
</script>

<style scoped>
.dashboard {
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.project-card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-meta {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.status,
.priority {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  text-transform: capitalize;
}

.status.active {
  background: var(--success-light);
  color: var(--success-color);
}
.status.completed {
  background: var(--secondary-light);
  color: var(--text-secondary);
}
.status.on-hold {
  background: var(--warning-light);
  color: var(--warning-color);
}

.priority.high {
  background: var(--danger-light);
  color: var(--danger-color);
}
.priority.medium {
  background: var(--warning-light);
  color: var(--warning-color);
}
.priority.low {
  background: var(--success-light);
  color: var(--success-color);
}

.view-project {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
}

.view-project:hover {
  opacity: 0.9;
}

h1,
h2 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.recent-projects {
  margin-top: 2rem;
}
</style>
