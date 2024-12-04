<template>
  <form @submit.prevent="handleSubmit" class="project-form">
    <div class="form-group">
      <label for="title">Project Name</label>
      <input 
        id="title"
        v-model="formData.title"
        type="text"
        required
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="formData.description"
        rows="3"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="status">Status</label>
      <select id="status" v-model="formData.status">
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="on-hold">On Hold</option>
      </select>
    </div>

    <div class="form-group">
      <label for="priority">Priority</label>
      <select id="priority" v-model="formData.priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>

    <div class="form-group">
      <label for="dueDate">Due Date</label>
      <input
        id="dueDate"
        v-model="formData.dueDate"
        type="date"
      />
    </div>

    <div class="form-group">
      <label>GitHub Repository</label>
      <GithubRepoSelector v-model="formData.githubRepo" />
    </div>

    <div class="form-actions">
      <button type="submit" class="btn-primary">
        {{ isEdit ? 'Save Changes' : 'Create Project' }}
      </button>
      <button type="button" class="btn-secondary" @click="$emit('cancel')">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProjectStore } from '@/stores/projects'
import GithubRepoSelector from './GithubRepoSelector.vue'
import type { Project, GitHubRepo } from '@/types'
import { v4 as uuidv4 } from 'uuid'

const props = defineProps<{
  project?: Project | null
}>()

const emit = defineEmits<{
  (e: 'submit', project: Partial<Project>): void
  (e: 'cancel'): void
}>()

const formData = ref({
  title: '',
  description: '',
  status: 'active' as 'active' | 'completed' | 'on-hold',
  priority: 'medium' as 'low' | 'medium' | 'high',
  dueDate: '',
  githubRepo: null as GitHubRepo | null
})

const isEdit = computed(() => !!props.project)

onMounted(() => {
  if (props.project) {
    formData.value = { 
      title: props.project.title,
      description: props.project.description,
      status: props.project.status,
      priority: props.project.priority,
      dueDate: props.project.dueDate || '',
      githubRepo: props.project.githubRepo || null
    }
  } else {
    // Reset to default values if no project is provided
    formData.value = {
      title: '',
      description: '',
      status: 'active',
      priority: 'medium',
      dueDate: '',
      githubRepo: null
    }
  }
})

const handleSubmit = () => {
  const projectData = {
    ...formData.value,
    id: props.project?.id || uuidv4(),
    createdAt: props.project?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tasks: props.project?.tasks || [],
    repoUrl: formData.value.githubRepo?.html_url,
  } as Project

  emit('submit', projectData)
}
</script>

<style scoped>
.project-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--text-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color);
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
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
</style>
