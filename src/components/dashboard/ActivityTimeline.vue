<template>
  <div class="activity-timeline">
    <h3>Recent Activity</h3>
    <div class="timeline">
      <div v-for="item in items" :key="item.id" class="timeline-item">
        <div :class="['timeline-icon', item.type]">
          <i :class="getIcon(item)"></i>
        </div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-title">{{ item.title }}</span>
            <span class="timeline-date">{{ formatDate(item.date) }}</span>
          </div>
          <div class="timeline-meta">
            <span :class="['timeline-type', item.type]">{{ item.type }}</span>
            <span :class="['timeline-status', item.status]">{{ item.status }}</span>
            <span v-if="item.priority" :class="['timeline-priority', item.priority]">
              {{ item.priority }}
            </span>
          </div>
          <div v-if="item.projectTitle" class="timeline-project">
            Project: {{ item.projectTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@/types'

const props = defineProps<{
  items: TimelineItem[]
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getIcon = (item: TimelineItem) => {
  if (item.type === 'project') {
    return 'fas fa-project-diagram'
  }
  return 'fas fa-tasks'
}
</script>

<style scoped>
.activity-timeline {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.activity-timeline h3 {
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  color: var(--text-color);
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 25px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-icon {
  position: absolute;
  left: -30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
}

.timeline-icon.project {
  background: var(--success-color);
}

.timeline-icon.task {
  background: var(--info-color);
}

.timeline-content {
  background: var(--bg-color);
  border-radius: 6px;
  padding: 15px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.timeline-title {
  font-weight: 500;
  color: var(--text-color);
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.timeline-meta {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
}

.timeline-type,
.timeline-status,
.timeline-priority {
  font-size: 0.8rem;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: capitalize;
}

.timeline-type {
  background: var(--primary-color);
  color: white;
}

.timeline-type.project {
  background: var(--success-color);
}

.timeline-type.task {
  background: var(--info-color);
}

.timeline-status.active,
.timeline-status.completed,
.timeline-status.done {
  background: var(--success-color);
  color: white;
}

.timeline-status.on-hold,
.timeline-status.pending {
  background: var(--warning-color);
  color: white;
}

.timeline-priority.high {
  background: var(--danger-color);
  color: white;
}

.timeline-priority.medium {
  background: var(--warning-color);
  color: white;
}

.timeline-priority.low {
  background: var(--success-color);
  color: white;
}

.timeline-project {
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
