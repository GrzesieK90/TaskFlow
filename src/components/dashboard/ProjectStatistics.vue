<template>
  <div class="project-statistics">
    <div class="stats-grid">
      <!-- Ogólne statystyki -->
      <div class="stat-card">
        <h3>Projects Overview</h3>
        <div class="stat-value primary">{{ stats.total }}</div>
        <div class="stat-label">Total Projects</div>
      </div>

      <!-- Statystyki statusów -->
      <div class="stat-card">
        <h3>Project Status</h3>
        <div class="stat-list">
          <div class="stat-item">
            <div class="stat-badge success">{{ stats.byStatus.active }}</div>
            <div class="stat-text">Active</div>
          </div>
          <div class="stat-item">
            <div class="stat-badge primary">{{ stats.byStatus.completed }}</div>
            <div class="stat-text">Completed</div>
          </div>
          <div class="stat-item">
            <div class="stat-badge warning">{{ stats.byStatus['on-hold'] }}</div>
            <div class="stat-text">On Hold</div>
          </div>
        </div>
      </div>

      <!-- Statystyki priorytetów -->
      <div class="stat-card">
        <h3>Priority Distribution</h3>
        <div class="stat-list">
          <div class="stat-item">
            <div class="stat-badge danger">{{ stats.byPriority.high }}</div>
            <div class="stat-text">High</div>
          </div>
          <div class="stat-item">
            <div class="stat-badge warning">{{ stats.byPriority.medium }}</div>
            <div class="stat-text">Medium</div>
          </div>
          <div class="stat-item">
            <div class="stat-badge success">{{ stats.byPriority.low }}</div>
            <div class="stat-text">Low</div>
          </div>
        </div>
      </div>

      <!-- Statystyki zadań -->
      <div class="stat-card">
        <h3>Tasks Overview</h3>
        <div class="stat-list">
          <div class="stat-item">
            <div class="stat-value">{{ stats.tasksStats.total }}</div>
            <div class="stat-text">Total</div>
          </div>
          <div class="stat-item">
            <div class="stat-value success">{{ stats.tasksStats.completed }}</div>
            <div class="stat-text">Completed</div>
          </div>
          <div class="stat-item">
            <div class="stat-value warning">{{ stats.tasksStats.inProgress }}</div>
            <div class="stat-text">In Progress</div>
          </div>
          <div class="stat-item">
            <div class="stat-value info">{{ stats.tasksStats.todo }}</div>
            <div class="stat-text">Todo</div>
          </div>
          <div class="stat-item">
            <div class="stat-value danger">{{ stats.tasksStats.overdue }}</div>
            <div class="stat-text">Overdue</div>
          </div>
        </div>
      </div>

      <!-- Statystyki GitHub -->
      <div class="stat-card">
        <h3>GitHub Activity</h3>
        <div class="stat-list">
          <div class="stat-item">
            <div class="stat-value">{{ stats.githubStats.totalRepos }}</div>
            <div class="stat-text">Repositories</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ stats.githubStats.totalIssues }}</div>
            <div class="stat-text">Issues</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ stats.githubStats.totalPRs }}</div>
            <div class="stat-text">Pull Requests</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">{{ stats.githubStats.totalCommits }}</div>
            <div class="stat-text">Commits</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectStats } from '@/types'

defineProps<{
  stats: ProjectStats
}>()
</script>

<style scoped>
.project-statistics {
  margin-bottom: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.stat-card h3 {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  color: var(--text-color);
}

.stat-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.stat-item {
  flex: 1;
  min-width: 80px;
  text-align: center;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--text-color);
}

.stat-value.primary { color: var(--primary-color); }
.stat-value.success { color: var(--success-color); }
.stat-value.warning { color: var(--warning-color); }
.stat-value.danger { color: var(--danger-color); }
.stat-value.info { color: var(--info-color); }

.stat-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
}

.stat-badge.primary { background: var(--primary-color); }
.stat-badge.success { background: var(--success-color); }
.stat-badge.warning { background: var(--warning-color); }
.stat-badge.danger { background: var(--danger-color); }
.stat-badge.info { background: var(--info-color); }

.stat-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
