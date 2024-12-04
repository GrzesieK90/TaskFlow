<template>
  <div class="project-details" v-if="project">
    <div class="project-header">
      <div class="project-title">
        <h1>{{ project.title }}</h1>
        <span class="project-status" :class="project.status">
          {{ project.status }}
        </span>
        <span class="project-priority" :class="project.priority">
          {{ project.priority }}
        </span>
      </div>
      <div class="project-actions">
        <button @click="editMode = !editMode" class="btn-primary">
          {{ editMode ? 'Cancel' : 'Edit' }}
        </button>
        <button @click="deleteProject" class="btn-danger">
          Delete Project
        </button>
      </div>
    </div>

    <div v-if="editMode" class="project-edit card">
      <div class="form-group">
        <label>Title</label>
        <input v-model="editedProject.title" type="text" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea v-model="editedProject.description" rows="3" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Status</label>
          <select v-model="editedProject.status">
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>
        <div class="form-group">
          <label>Priority</label>
          <select v-model="editedProject.priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Due Date</label>
        <input type="date" v-model="editedProject.dueDate" />
      </div>
      <div class="form-group">
        <label>GitHub Repository URL</label>
        <input type="text" v-model="editedProject.repoUrl" placeholder="owner/repo" />
      </div>
      <div class="form-actions">
        <button @click="saveProject" class="btn-primary">Save Changes</button>
        <button @click="editMode = false" class="btn-secondary">Cancel</button>
      </div>
    </div>

    <div v-else class="project-info card">
      <p class="description">{{ project.description }}</p>
      <div class="meta-info">
        <div class="meta-item">
          <strong>Created:</strong> {{ formatDate(project.createdAt) }}
        </div>
        <div class="meta-item" v-if="project.dueDate">
          <strong>Due Date:</strong> {{ formatDate(project.dueDate) }}
        </div>
      </div>
    </div>

    <div v-if="project.githubRepo" class="github-section">
      <GitHubDetails 
        :repo="project.githubRepo" 
        :stats="githubStore.repoStats ?? undefined" 
      />
      
      <div class="github-activity">
        <div class="activity-column">
          <GitHubIssues 
            :issues="githubStore.issues" 
          />
        </div>
        <div class="activity-column">
          <GitHubPullRequests 
            :pullRequests="githubStore.pullRequests" 
          />
        </div>
      </div>

      <TaskList
        v-model:tasks="project.tasks"
        @update:tasks="updateTasks"
      />

      <GitHubCommits 
        :commits="githubStore.commits" 
      />
    </div>

  </div>
  <div v-else class="not-found">
    Project not found
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProjectStore } from '@/stores/projects'
import { useGithubStore } from '@/stores/github'
import TaskList from '@/components/TaskList.vue'
import GitHubDetails from '@/components/GitHubDetails.vue'
import GitHubCommits from '@/components/GitHubCommits.vue'
import GitHubIssues from '@/components/GitHubIssues.vue'
import GitHubPullRequests from '@/components/GitHubPullRequests.vue'
import type { Project } from '@/types'

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const githubStore = useGithubStore()

const project = computed(() => projectStore.projectById(route.params.id as string))
const editMode = ref(false)
const editedProject = ref<Partial<Project>>({})

onMounted(async () => {
  if (project.value) {
    editedProject.value = { ...project.value }
    if (project.value.githubRepo) {
      const [owner, repo] = project.value.githubRepo.full_name.split('/')
      await Promise.all([
        githubStore.fetchCommits(owner, repo),
        githubStore.fetchRepoStats(owner, repo),
        githubStore.fetchIssues(owner, repo),
        githubStore.fetchPullRequests(owner, repo)
      ])
    }
  }
})

const saveProject = () => {
  if (editedProject.value) {
    projectStore.updateProject(
      project.value!.id,
      editedProject.value
    )
    editMode.value = false
  }
}

const deleteProject = () => {
  if (confirm('Are you sure you want to delete this project?')) {
    projectStore.deleteProject(project.value!.id)
    router.push('/projects')
  }
}

const updateTasks = (tasks: Project['tasks']) => {
  projectStore.updateProject(project.value!.id, { tasks })
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.project-details {
  padding: 20px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.project-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-title h1 {
  margin: 0;
}

.project-status,
.project-priority {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.project-status.active { background: var(--success-color); color: white; }
.project-status.completed { background: var(--primary-color); color: white; }
.project-status.on-hold { background: var(--warning-color); color: white; }

.project-priority.high { background: var(--danger-color); color: white; }
.project-priority.medium { background: var(--warning-color); color: white; }
.project-priority.low { background: var(--success-color); color: white; }

.project-actions {
  display: flex;
  gap: 10px;
}

.project-edit,
.project-info {
  margin-bottom: 20px;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.description {
  margin: 0 0 15px 0;
  line-height: 1.5;
}

.meta-info {
  display: flex;
  gap: 20px;
}

.meta-item {
  color: var(--text-secondary);
}

.github-section {
  margin: 20px 0;
}

.github-activity {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.activity-column {
  min-width: 0;
}

.not-found {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: var(--text-secondary);
}
</style>
