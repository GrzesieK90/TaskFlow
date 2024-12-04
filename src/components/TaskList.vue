<template>
  <div class="task-list">
    <div class="task-list-header">
      <h3>Tasks</h3>
      <div class="task-filters">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search tasks..."
          class="search-input"
        />
        <select v-model="priorityFilter" class="filter-select">
          <option value="">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <select v-model="sortBy" class="filter-select">
          <option value="created-desc">Newest First</option>
          <option value="created-asc">Oldest First</option>
          <option value="due-asc">Due Date (Earliest)</option>
          <option value="due-desc">Due Date (Latest)</option>
        </select>
      </div>
      <button class="btn-primary" @click="showNewTaskForm = true">Add Task</button>
    </div>

    <div class="task-stats">
      <div class="stat-item">
        <span class="stat-label">Total Tasks:</span>
        <span class="stat-value">{{ tasks.length }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Completed:</span>
        <span class="stat-value">{{ completedTasks.length }} ({{ completionPercentage }}%)</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">In Progress:</span>
        <span class="stat-value">{{ inProgressTasks.length }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">To Do:</span>
        <span class="stat-value">{{ todoTasks.length }}</span>
      </div>
    </div>

    <div v-if="showNewTaskForm" class="task-form card">
      <input v-model="newTask.title" type="text" placeholder="Task name" class="task-input" />
      <textarea v-model="newTask.description" placeholder="Task description" class="task-input" />
      <div class="form-row">
        <select v-model="newTask.priority" class="task-input">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <input v-model="newTask.dueDate" type="date" class="task-input" />
      </div>
      <div class="form-actions">
        <button class="btn-primary" @click="addTask">Save</button>
        <button @click="showNewTaskForm = false">Cancel</button>
      </div>
    </div>

    <div v-if="tasks.length === 0" class="no-tasks">No tasks in this project</div>

    <div v-else class="tasks-grid">
      <div v-for="status in taskStatuses" :key="status" class="task-column">
        <h4 class="column-title">{{ statusLabels[status] }}</h4>
        <div class="task-cards">
          <div
            v-for="task in getTasksByStatus(status)"
            :key="task.id"
            class="task-card"
            :class="{
              'priority-high': task.priority === 'high',
              'priority-medium': task.priority === 'medium',
              'priority-low': task.priority === 'low',
            }"
          >
            <div class="task-card-header">
              <h4>{{ task.title }}</h4>
              <div class="task-actions">
                <button
                  v-if="status !== 'completed'"
                  class="btn-icon"
                  @click="completeTask(task.id)"
                  title="Complete task"
                >
                  ✓
                </button>
                <button
                  class="btn-icon btn-danger"
                  @click="deleteTask(task.id)"
                  title="Delete task"
                >
                  ×
                </button>
              </div>
            </div>
            <p class="task-description">{{ task.description }}</p>
            <div class="task-footer">
              <span class="task-due-date" v-if="task.dueDate">
                Due: {{ formatDate(task.dueDate) }}
              </span>
              <select v-model="task.status" @change="updateTaskStatus(task)" class="status-select">
                <option v-for="s in taskStatuses" :key="s" :value="s">
                  {{ statusLabels[s] }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { Task } from '@/types'

const props = defineProps<{
  tasks: Task[]
}>()

const emit = defineEmits<{
  (e: 'update:tasks', tasks: Task[]): void
}>()

const showNewTaskForm = ref(false)
const newTask = ref({
  title: '',
  description: '',
  priority: 'medium',
  dueDate: '',
})

const taskStatuses = ['todo', 'in-progress', 'completed'] as const
const statusLabels = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  completed: 'Completed',
}

const searchQuery = ref('')
const priorityFilter = ref('')
const sortBy = ref('created-desc')

// Computed properties for task statistics
const completedTasks = computed(() => props.tasks.filter(task => task.status === 'completed'))
const inProgressTasks = computed(() => props.tasks.filter(task => task.status === 'in-progress'))
const todoTasks = computed(() => props.tasks.filter(task => task.status === 'todo'))
const completionPercentage = computed(() => {
  return props.tasks.length > 0 
    ? Math.round((completedTasks.value.length / props.tasks.length) * 100) 
    : 0
})

// Filter and sort tasks
const filteredTasks = computed(() => {
  let filtered = [...props.tasks]

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(task => 
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    )
  }

  // Apply priority filter
  if (priorityFilter.value) {
    filtered = filtered.filter(task => task.priority === priorityFilter.value)
  }

  // Apply sorting
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'created-desc':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case 'created-asc':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case 'due-desc':
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
      case 'due-asc':
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      default:
        return 0
    }
  })

  return filtered
})

const getTasksByStatus = (status: string) => {
  return filteredTasks.value.filter(task => task.status === status)
}

const addTask = () => {
  const task: Task = {
    id: uuidv4(),
    title: newTask.value.title,
    description: newTask.value.description,
    status: 'todo',
    priority: newTask.value.priority as 'low' | 'medium' | 'high',
    dueDate: newTask.value.dueDate,
    createdAt: new Date().toISOString(),
  }

  emit('update:tasks', [...props.tasks, task])

  // Reset form
  newTask.value = {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  }
  showNewTaskForm.value = false
}

const deleteTask = (taskId: string) => {
  emit(
    'update:tasks',
    props.tasks.filter((t) => t.id !== taskId),
  )
}

const completeTask = (taskId: string) => {
  const updatedTasks = props.tasks.map((task): Task => 
    task.id === taskId 
      ? {
          id: task.id,
          title: task.title,
          description: task.description,
          status: 'completed',
          priority: task.priority,
          dueDate: task.dueDate,
          createdAt: task.createdAt
        }
      : task
  )
  emit('update:tasks', updatedTasks)
}

const updateTaskStatus = (task: Task) => {
  const updatedTasks = props.tasks.map((t) => (t.id === task.id ? task : t))
  emit('update:tasks', updatedTasks)
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
</script>

<style scoped>
.task-list {
  padding: 20px;
  max-width: 1920px;
  min-width: 1024px;
  margin: 0 auto;
}

.task-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.task-filters {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.search-input,
.filter-select {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--text-color);
}

.search-input {
  min-width: 200px;
}

.filter-select {
  min-width: 150px;
}

.search-input:focus,
.filter-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-light);
}

.task-form {
  margin-bottom: 20px;
}

.task-input {
  margin-bottom: 10px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  min-height: 400px;
}

.task-column {
  background: var(--card-bg);
  border-radius: 6px;
  padding: 10px;
  min-width: 320px;
}

.column-title {
  margin-bottom: 10px;
  padding: 10px;
  background: var(--bg-color);
  border-radius: 6px;
  text-align: center;
}

.task-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 200px;
}

.task-card {
  background: var(--bg-color);
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-left: 4px solid transparent;
}

.priority-high {
  border-left-color: var(--danger-color);
}

.priority-medium {
  border-left-color: var(--warning-color);
}

.priority-low {
  border-left-color: var(--success-color);
}

.task-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.task-card-header h4 {
  margin: 0;
  font-size: 1rem;
}

.task-actions {
  display: flex;
  gap: 4px;
}

.btn-icon {
  padding: 2px 6px;
  font-size: 12px;
  line-height: 1;
}

.task-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0 0 8px 0;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

.task-due-date {
  color: var(--text-secondary);
}

.status-select {
  font-size: 0.8rem;
  padding: 2px 4px;
}

.no-tasks {
  text-align: center;
  color: var(--text-secondary);
  padding: 20px;
}

.task-stats {
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color);
}

@media (min-width: 1024px) and (max-width: 1920px) {
  .task-list {
    width: 100%;
    padding: 20px;
  }

  .tasks-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
