<template>
  <div class="issues-section card" v-if="issues.length">
    <h3>Issues</h3>
    <div class="issues-list">
      <div v-for="issue in issues" :key="issue.id" class="issue-item">
        <div class="issue-header">
          <div class="issue-title">
            <span class="issue-number">#{{ issue.number }}</span>
            <a :href="issue.html_url" target="_blank" class="issue-link">
              {{ issue.title }}
            </a>
          </div>
          <span class="issue-state" :class="issue.state">
            {{ issue.state }}
          </span>
        </div>
        <div class="issue-meta">
          <div class="issue-user">
            <img :src="issue.user.avatar_url" :alt="issue.user.login" class="user-avatar">
            <span>{{ issue.user.login }}</span>
          </div>
          <div class="issue-date">
            {{ formatDate(issue.created_at) }}
          </div>
        </div>
        <div class="issue-labels" v-if="issue.labels.length">
          <span 
            v-for="label in issue.labels" 
            :key="label.name" 
            class="label"
            :style="{ backgroundColor: '#' + label.color }"
          >
            {{ label.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubIssue } from '@/types'

defineProps<{
  issues: GitHubIssue[]
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
.issues-section {
  margin-bottom: 20px;
  padding: 20px;
}

.issues-section h3 {
  margin: 0 0 20px 0;
}

.issues-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.issue-item {
  padding: 15px;
  background: var(--bg-color);
  border-radius: 6px;
}

.issue-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.issue-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.issue-number {
  color: var(--text-secondary);
  font-family: monospace;
}

.issue-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

.issue-link:hover {
  text-decoration: underline;
}

.issue-state {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.issue-state.open {
  background: var(--success-color);
  color: white;
}

.issue-state.closed {
  background: var(--danger-color);
  color: white;
}

.issue-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.issue-user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.issue-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.label {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: white;
}
</style>
