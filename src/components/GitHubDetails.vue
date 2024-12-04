<template>
  <div class="github-details">
    <div class="github-header card">
      <div class="repo-info">
        <img 
          :src="repo.owner.avatar_url" 
          :alt="repo.owner.login"
          class="avatar"
        />
        <div class="repo-meta">
          <h3>
            <a :href="repo.html_url" target="_blank">
              {{ repo.full_name }}
            </a>
          </h3>
          <p>{{ repo.description || 'No description available' }}</p>
        </div>
      </div>
      <div class="repo-stats" v-if="stats">
        <div class="stat-item">
          <span class="stat-value">{{ stats.stars }}</span>
          <span class="stat-label">Stars</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.forks }}</span>
          <span class="stat-label">Forks</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.watchers }}</span>
          <span class="stat-label">Watchers</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.issues }}</span>
          <span class="stat-label">Issues</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.contributors }}</span>
          <span class="stat-label">Contributors</span>
        </div>
      </div>
      <div class="repo-meta-info" v-if="stats">
        <div class="meta-item">
          <strong>Language:</strong> {{ stats.language || 'Not specified' }}
        </div>
        <div class="meta-item">
          <strong>License:</strong> {{ stats.license }}
        </div>
        <div class="meta-item">
          <strong>Last Update:</strong> {{ formatDate(stats.lastUpdate) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubRepo, GitHubStats } from '@/types'

defineProps<{
  repo: GitHubRepo
  stats?: GitHubStats
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
.github-details {
  margin-bottom: 20px;
}

.github-header {
  padding: 20px;
}

.repo-info {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.repo-meta {
  flex: 1;
}

.repo-meta h3 {
  margin: 0 0 5px 0;
}

.repo-meta p {
  margin: 0;
  color: var(--text-secondary);
}

.repo-stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin: 20px 0;
  padding: 15px;
  background: var(--bg-color);
  border-radius: 6px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.repo-meta-info {
  display: flex;
  gap: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
}

.meta-item {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.meta-item strong {
  color: var(--text-color);
}
</style>
