<template>
  <div class="github-selector">
    <div class="search-box">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Enter repository name or GitHub URL..."
        @input="handleSearch"
      />
      <div v-if="isLoading" class="loading">
        Searching...
      </div>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="searchResults.length > 0" class="results">
      <div
        v-for="repo in searchResults"
        :key="repo.id"
        class="repo-item"
        :class="{ selected: isSelected(repo) }"
        @click="selectRepo(repo)"
      >
        <div class="repo-info">
          <img :src="repo.owner.avatar_url" :alt="repo.owner.login" class="avatar" />
          <div class="repo-details">
            <div class="repo-name">{{ repo.full_name }}</div>
            <div class="repo-description">{{ repo.description || 'No description available' }}</div>
          </div>
        </div>
        <div class="repo-meta">
          <span v-if="repo.private" class="private-badge">Private</span>
          <span v-else class="public-badge">Public</span>
        </div>
      </div>
    </div>

    <div v-else-if="searchQuery && !isLoading" class="no-results">
      <p>No repositories found</p>
      <small>Try searching by:</small>
      <ul>
        <li>Repository name (e.g., "vue")</li>
        <li>Owner/repository (e.g., "vuejs/vue")</li>
        <li>GitHub URL (e.g., "https://github.com/vuejs/vue")</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useGithubStore } from '@/stores/github'
import type { GitHubRepo } from '@/types'
import { debounce } from 'lodash-es'

const props = defineProps<{
  modelValue: GitHubRepo | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', repo: GitHubRepo | null): void
}>()

const githubStore = useGithubStore()
const searchQuery = ref('')
const isLoading = ref(false)
const error = ref('')
const searchResults = ref<GitHubRepo[]>([])

const isSelected = computed(() => (repo: GitHubRepo) => 
  props.modelValue?.id === repo.id
)

const handleSearch = debounce(async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }
  
  isLoading.value = true
  error.value = ''
  
  try {
    searchResults.value = await githubStore.searchRepositories(searchQuery.value)
  } catch (err) {
    error.value = 'Failed to search repositories. Please try again.'
    console.error('GitHub search error:', err)
  } finally {
    isLoading.value = false
  }
}, 300)

const selectRepo = (repo: GitHubRepo) => {
  emit('update:modelValue', repo)
}
</script>

<style scoped>
.github-selector {
  width: 100%;
}

.search-box {
  position: relative;
  margin-bottom: 1rem;
}

.search-box input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.loading {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #586069;
}

.error {
  color: #cb2431;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #ffdce0;
  border-radius: 4px;
}

.results {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.repo-item {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.repo-item:last-child {
  border-bottom: none;
}

.repo-item:hover {
  background-color: #f6f8fa;
}

.repo-item.selected {
  background-color: #f1f8ff;
}

.repo-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.repo-details {
  flex: 1;
}

.repo-name {
  font-weight: 500;
  color: #0366d6;
}

.repo-description {
  font-size: 0.875rem;
  color: #586069;
  margin-top: 0.25rem;
}

.repo-meta {
  margin-left: 1rem;
}

.private-badge,
.public-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.private-badge {
  background-color: #ffdce0;
  color: #cb2431;
}

.public-badge {
  background-color: #ddf3e4;
  color: #22863a;
}

.no-results {
  padding: 1rem;
  text-align: center;
  color: #586069;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.no-results ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  font-size: 0.875rem;
}

.no-results li {
  margin: 0.25rem 0;
  color: #0366d6;
}
</style>
