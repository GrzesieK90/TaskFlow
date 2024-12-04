<template>
  <div class="backup-manager">
    <div class="backup-info" v-if="lastBackupDate">
      Last backup: {{ formatDate(lastBackupDate) }}
    </div>

    <div class="backup-actions">
      <button @click="exportBackup" class="btn btn-primary">Export Backup</button>
      <button @click="triggerFileInput" class="btn btn-primary">Import Backup</button>
      <input
        type="file"
        ref="fileInput"
        accept=".json"
        style="display: none"
        @change="handleFileImport"
      />
    </div>

    <!-- Change History -->
    <div class="history-section" v-if="store.history.length">
      <h3>Change History</h3>
      <div class="history-list">
        <div v-for="entry in store.history.slice(0, 5)" :key="entry.timestamp" class="history-item">
          <div class="history-info">
            <span class="history-date">{{ formatDate(new Date(entry.timestamp)) }}</span>
            <span class="history-description">{{ entry.description }}</span>
          </div>
          <button @click="restoreFromHistory(entry.timestamp)" class="btn btn-small">
            Restore
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/stores/projects'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useProjectStore()
const { lastBackupDate } = storeToRefs(store)
const fileInput = ref<HTMLInputElement | null>(null)

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }
  return new Date(date).toLocaleString('en-US', options)
}

const exportBackup = () => {
  store.exportBackup()
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileImport = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files?.length) {
    const file = input.files[0]
    const success = await store.importBackup(file)
    if (success) {
      alert('Backup imported successfully')
    } else {
      alert('Error importing backup')
    }
    input.value = '' // Reset input
  }
}

const restoreFromHistory = (timestamp: string) => {
  if (
    confirm('Are you sure you want to restore data from this backup? Current changes will be lost.')
  ) {
    const success = store.restoreFromHistory(timestamp)
    if (success) {
      alert('Data restored successfully')
    } else {
      alert('Error restoring data')
    }
  }
}
</script>

<style scoped>
.backup-manager {
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin: 1rem 0;
}

.backup-info {
  margin-bottom: 1rem;
  color: var(--text-color-secondary);
}

.backup-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.history-section {
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.history-section h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: var(--card-bg);
  border-radius: 4px;
}

.history-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.history-date {
  font-size: 0.875rem;
  color: var(--text-color-secondary);
}

.history-description {
  font-size: 0.875rem;
}
</style>
