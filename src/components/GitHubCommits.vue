<template>
  <div class="commits-section card" v-if="commits && commits.length">
    <h3>Recent Commits</h3>
    <div class="commits-list">
      <div v-for="commit in commits" :key="commit.sha" class="commit-item">
        <div class="commit-header">
          <a :href="commit.html_url" target="_blank" class="commit-sha">
            {{ commit.sha.substring(0, 7) }}
          </a>
          <span class="commit-date">
            {{ formatDate(commit.author.date) }}
          </span>
        </div>
        <p class="commit-message">{{ commit.message }}</p>
        <div class="commit-author">
          <span>{{ commit.author.name }}</span>
          <span class="commit-email">{{ commit.author.email }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubCommit } from '@/types'

defineProps<{
  commits: GitHubCommit[]
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
</script>

<style scoped>
.commits-section {
  margin-bottom: 20px;
  padding: 20px;
}

.commits-section h3 {
  margin: 0 0 20px 0;
}

.commits-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.commit-item {
  padding: 15px;
  background: var(--bg-color);
  border-radius: 6px;
}

.commit-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.commit-sha {
  color: var(--primary-color);
  font-family: monospace;
  text-decoration: none;
}

.commit-sha:hover {
  text-decoration: underline;
}

.commit-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.commit-message {
  margin: 0 0 10px 0;
  font-size: 1rem;
  line-height: 1.5;
}

.commit-author {
  display: flex;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.commit-email {
  color: var(--text-secondary);
}
</style>
