<template>
  <div class="pull-requests-section card" v-if="pullRequests.length">
    <h3>Pull Requests</h3>
    <div class="pull-requests-list">
      <div v-for="pr in pullRequests" :key="pr.id" class="pr-item">
        <div class="pr-header">
          <div class="pr-title">
            <span class="pr-number">#{{ pr.number }}</span>
            <a :href="pr.html_url" target="_blank" class="pr-link">
              {{ pr.title }}
            </a>
          </div>
          <span class="pr-state" :class="pr.state">
            {{ pr.state }}
          </span>
        </div>
        <div class="pr-meta">
          <div class="pr-user">
            <img :src="pr.user.avatar_url" :alt="pr.user.login" class="user-avatar">
            <span>{{ pr.user.login }}</span>
          </div>
          <div class="pr-date">
            {{ formatDate(pr.created_at) }}
          </div>
        </div>
        <div class="pr-branches">
          <span class="branch">{{ pr.head.ref }}</span>
          <span class="arrow">→</span>
          <span class="branch">{{ pr.base.ref }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubPullRequest } from '@/types'

defineProps<{
  pullRequests: GitHubPullRequest[]
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
.pull-requests-section {
  margin-bottom: 20px;
  padding: 20px;
}

.pull-requests-section h3 {
  margin: 0 0 20px 0;
}

.pull-requests-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.pr-item {
  padding: 15px;
  background: var(--bg-color);
  border-radius: 6px;
}

.pr-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.pr-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pr-number {
  color: var(--text-secondary);
  font-family: monospace;
}

.pr-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
}

.pr-link:hover {
  text-decoration: underline;
}

.pr-state {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.pr-state.open {
  background: var(--success-color);
  color: white;
}

.pr-state.closed {
  background: var(--danger-color);
  color: white;
}

.pr-state.merged {
  background: var(--primary-color);
  color: white;
}

.pr-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.pr-user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.pr-branches {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
  font-size: 0.9rem;
}

.branch {
  padding: 2px 6px;
  background: var(--border-color);
  border-radius: 4px;
}

.arrow {
  color: var(--text-secondary);
}
</style>
