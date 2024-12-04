<template>
  <div class="projects-view">
    <div class="header">
      <h1>Projects</h1>
      <button @click="showCreateForm = true" class="btn-primary">New Project</button>
    </div>

    <div class="filters-section">
      <div class="search-bar">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search projects..."
          class="search-input"
        />
      </div>

      <div class="filters">
        <select v-model="statusFilter">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="on-hold">On Hold</option>
        </select>

        <select v-model="priorityFilter">
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select v-model="sortBy">
          <option value="created-desc">Newest First</option>
          <option value="created-asc">Oldest First</option>
          <option value="updated-desc">Recently Updated</option>
          <option value="updated-asc">Least Recently Updated</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
        </select>
      </div>

      <div class="active-filters" v-if="hasActiveFilters">
        <span class="filter-label">Active Filters:</span>
        <div class="filter-tags">
          <span v-if="searchQuery" class="filter-tag">
            Search: "{{ searchQuery }}"
            <button @click="searchQuery = ''" class="remove-filter">×</button>
          </span>
          <span v-if="statusFilter" class="filter-tag">
            Status: {{ statusFilter }}
            <button @click="statusFilter = ''" class="remove-filter">×</button>
          </span>
          <span v-if="priorityFilter" class="filter-tag">
            Priority: {{ priorityFilter }}
            <button @click="priorityFilter = ''" class="remove-filter">×</button>
          </span>
        </div>
        <button @click="clearFilters" class="clear-filters">Clear All</button>
      </div>
    </div>

    <div v-if="filteredProjects.length === 0" class="no-results">
      <p>No projects found matching your criteria</p>
      <button @click="clearFilters" class="btn-secondary">Clear Filters</button>
    </div>

    <div v-else class="projects-grid">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card"
        @click="$router.push(`/projects/${project.id}`)"
      >
        <div class="project-header">
          <h3>{{ project.title }}</h3>
          <div class="project-badges">
            <span :class="['status', project.status]">{{ project.status }}</span>
            <span :class="['priority', project.priority]">{{ project.priority }}</span>
          </div>
        </div>

        <p class="project-description">{{ project.description }}</p>

        <div v-if="project.githubRepo" class="github-info">
          <img
            :src="project.githubRepo.owner.avatar_url"
            alt="GitHub Avatar"
            class="github-avatar"
          />
          <a v-if="project.githubRepo" :href="project.repoUrl" target="_blank" class="github-link">
            {{ project.githubRepo.full_name }}
          </a>
        </div>

        <div class="project-meta">
          <span class="meta-item"> Created: {{ formatDate(project.createdAt) }} </span>
          <span class="meta-item" v-if="project.updatedAt">
            Updated: {{ formatDate(project.updatedAt) }}
          </span>
        </div>

        <div class="project-footer">
          <button @click.stop="editProject(project)" class="btn-secondary">Edit</button>
          <button @click.stop="deleteProject(project.id)" class="btn-danger">Delete</button>
        </div>
      </div>
    </div>

    <DataBackupManager />

    <div v-if="showCreateForm || editingProject" class="modal">
      <div class="modal-content">
        <ProjectForm :project="editingProject" @submit="handleProjectSubmit" @cancel="closeForm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProjectStore } from '@/stores/projects'
import ProjectForm from '@/components/ProjectForm.vue'
import DataBackupManager from '@/components/DataBackupManager.vue'
import type { Project } from '@/types'
import { useRouter } from 'vue-router'

const router = useRouter()
const projectStore = useProjectStore()
const showCreateForm = ref(false)
const editingProject = ref<Project | null>(null)
const statusFilter = ref('')
const priorityFilter = ref('')
const searchQuery = ref('')
const sortBy = ref('created-desc')

// Format date helper
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Computed property for filtered and sorted projects
const filteredProjects = computed(() => {
  return projectStore.getFilteredProjects(
    searchQuery.value,
    statusFilter.value,
    priorityFilter.value,
    sortBy.value,
  )
})

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return searchQuery.value || statusFilter.value || priorityFilter.value
})

// Clear all filters
const clearFilters = () => {
  searchQuery.value = ''
  statusFilter.value = ''
  priorityFilter.value = ''
  sortBy.value = 'created-desc'
}

// Form handling
const closeForm = () => {
  showCreateForm.value = false
  editingProject.value = null
}

const handleProjectSubmit = (project: Partial<Project>) => {
  if (editingProject.value) {
    // Updating existing project
    projectStore.updateProject(editingProject.value.id, project)
  } else {
    // Creating new project
    projectStore.addProject(project)
  }

  // Reset form state
  showCreateForm.value = false
  editingProject.value = null
}

const editProject = (project: Project) => {
  editingProject.value = project
}

const deleteProject = async (id: string) => {
  if (confirm('Are you sure you want to delete this project?')) {
    await projectStore.deleteProject(id)
  }
}
</script>

<style scoped>
.projects-view {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* Backup manager styles */
:deep(.backup-manager) {
  width: 68vw;
  margin: 2rem auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  :deep(.backup-manager) {
    width: 100%;
    margin: 1rem 0;
  }
}

.search-bar {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color);
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.filters select {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--text-color);
  min-width: 150px;
  cursor: pointer;
}

.filters select:hover {
  border-color: var(--primary-color);
}

.filters select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-light);
}

.filters select option {
  background: var(--bg-color);
  color: var(--text-color);
  padding: 0.5rem;
}

.active-filters {
  margin-top: 1rem;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.filter-label {
  font-weight: 500;
  margin-right: 1rem;
  color: var(--text-color);
}

.filter-tags {
  display: inline-flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.875rem;
  color: var(--text-color);
}

.remove-filter {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1;
  opacity: 0.7;
}

.remove-filter:hover {
  opacity: 1;
}

.clear-filters {
  margin-left: 1rem;
  padding: 0.25rem 0.5rem;
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 0.875rem;
}

.clear-filters:hover {
  text-decoration: underline;
}

.no-results {
  text-align: center;
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.no-results p {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px var(--shadow-color);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid var(--border-color);
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-color);
}

.project-header {
  margin-bottom: 1rem;
}

.project-header h3 {
  color: var(--text-color);
  margin: 0 0 0.5rem 0;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
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

.project-description {
  margin: 1rem 0;
  color: var(--text-color);
}

.github-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding: 0.5rem;
  background: var(--card-bg);
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.github-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.github-link {
  color: var(--primary-color);
  text-decoration: none;
}

.github-link:hover {
  text-decoration: underline;
}

.project-meta {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.project-footer {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary,
.btn-secondary,
.btn-danger {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-hover);
}

.btn-secondary {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.btn-secondary:hover {
  background: var(--hover-bg);
}

.btn-danger {
  background: var(--error-color);
  color: white;
}

.btn-danger:hover {
  opacity: 0.9;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 80vw;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
</style>
