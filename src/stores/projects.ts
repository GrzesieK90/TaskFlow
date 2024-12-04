import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import type { Project } from '@/types'

const STORAGE_KEY = 'taskflow-projects'
const BACKUP_KEY = 'taskflow-projects-backup'
const HISTORY_KEY = 'taskflow-projects-history'

// Interfejs dla wpisu w historii
interface HistoryEntry {
  timestamp: string;  // Format: YYYY-MM-DD
  projects: Project[];
  description: string;
}

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [] as Project[],
    lastBackupDate: null as Date | null,
    history: [] as HistoryEntry[]
  }),

  getters: {
    activeProjects: (state) => 
      state.projects.filter(p => p.status === 'active'),
    
    completedProjects: (state) =>
      state.projects.filter(p => p.status === 'completed'),
    
    highPriorityProjects: (state) =>
      state.projects.filter(p => p.priority === 'high'),
    
    projectById: (state) => (id: string) =>
      state.projects.find(p => p.id === id),
    
    // Nowe gettery dla filtrowania i sortowania
    getFilteredProjects: (state) => (
      searchQuery: string,
      status: string,
      priority: string,
      sortBy: string
    ) => {
      let filtered = [...state.projects]

      // Filtrowanie po wyszukiwaniu
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        filtered = filtered.filter(project => 
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query)
        )
      }

      // Filtrowanie po statusie
      if (status) {
        filtered = filtered.filter(project => project.status === status)
      }

      // Filtrowanie po priorytecie
      if (priority) {
        filtered = filtered.filter(project => project.priority === priority)
      }

      // Sortowanie
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'created-desc':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          case 'created-asc':
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          case 'updated-desc':
            return new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime()
          case 'updated-asc':
            return new Date(a.updatedAt || a.createdAt).getTime() - new Date(b.updatedAt || b.createdAt).getTime()
          case 'title-asc':
            return a.title.localeCompare(b.title)
          case 'title-desc':
            return b.title.localeCompare(a.title)
          default:
            return 0
        }
      })

      return filtered
    },
    getHistoryByDate: (state) => (date: string) => {
      return state.history.find(entry => entry.timestamp === date)
    }
  },

  actions: {
    addProject(projectData: Partial<Project>) {
      const newProject: Project = {
        id: uuidv4(),
        title: projectData.title || '',
        description: projectData.description || '',
        status: projectData.status || 'active',
        priority: projectData.priority || 'medium',
        tasks: [],
        createdAt: new Date().toISOString(),
        dueDate: projectData.dueDate || new Date().toISOString(),
        githubRepo: projectData.githubRepo || null,
        repoUrl: projectData.repoUrl || ''
      }
      
      this.projects.push(newProject)
      this.saveToLocalStorage()
      return newProject
    },

    updateProject(id: string, updates: Partial<Project>) {
      const projectIndex = this.projects.findIndex(p => p.id === id)
      if (projectIndex !== -1) {
        // Explicitly handle potential undefined values
        const updatedProject: Project = {
          ...this.projects[projectIndex],
          title: updates.title ?? this.projects[projectIndex].title,
          description: updates.description ?? this.projects[projectIndex].description,
          status: updates.status ?? this.projects[projectIndex].status,
          priority: updates.priority ?? this.projects[projectIndex].priority,
          dueDate: updates.dueDate ?? this.projects[projectIndex].dueDate,
          githubRepo: updates.githubRepo ?? this.projects[projectIndex].githubRepo,
          repoUrl: updates.repoUrl ?? this.projects[projectIndex].repoUrl,
          updatedAt: new Date().toISOString()
        }
        
        this.projects[projectIndex] = updatedProject
        this.saveToLocalStorage()
      }
    },

    deleteProject(id: string) {
      const index = this.projects.findIndex(p => p.id === id)
      if (index !== -1) {
        this.projects.splice(index, 1)
        this.saveToLocalStorage()
      }
    },

    loadFromLocalStorage() {
      try {
        // Wczytywanie historii
        const historyData = localStorage.getItem(HISTORY_KEY)
        if (historyData) {
          this.history = JSON.parse(historyData)
        }

        // Wczytywanie projektów
        const projectsData = localStorage.getItem(STORAGE_KEY)
        if (projectsData) {
          this.projects = JSON.parse(projectsData)
        } else {
          const backupData = localStorage.getItem(BACKUP_KEY)
          if (backupData) {
            this.projects = JSON.parse(backupData)
            console.info('Przywrócono dane z kopii zapasowej')
          }
        }
      } catch (error) {
        console.error('Błąd podczas wczytywania danych:', error)
      }
    },

    formatDate(date: Date): string {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },

    parseDate(dateStr: string): Date {
      const [year, month, day] = dateStr.split('-').map(Number)
      return new Date(year, month - 1, day)
    },

    saveToLocalStorage(description: string = 'Auto-save') {
      try {
        const projectsData = JSON.stringify(this.projects)
        localStorage.setItem(STORAGE_KEY, projectsData)
        
        // Zapisywanie kopii zapasowej
        localStorage.setItem(BACKUP_KEY, projectsData)
        this.lastBackupDate = new Date()

        // Dodawanie wpisu do historii
        const historyEntry: HistoryEntry = {
          timestamp: this.formatDate(new Date()),
          projects: [...this.projects],
          description
        }
        
        // Ograniczenie historii do ostatnich 50 wpisów
        this.history = [historyEntry, ...this.history].slice(0, 50)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history))
      } catch (error) {
        console.error('Błąd podczas zapisywania danych:', error)
      }
    },

    createBackup() {
      const projectsData = JSON.stringify(this.projects)
      localStorage.setItem(BACKUP_KEY, projectsData)
      this.lastBackupDate = new Date()
    },

    restoreFromBackup() {
      const backupData = localStorage.getItem(BACKUP_KEY)
      if (backupData) {
        this.projects = JSON.parse(backupData)
        this.saveToLocalStorage()
        return true
      }
      return false
    },

    exportBackup() {
      const backup = {
        projects: this.projects,
        history: this.history,
        timestamp: this.formatDate(new Date()),
        version: '1.0'
      }
      
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      
      const a = document.createElement('a')
      a.href = url
      a.download = `taskflow-backup-${this.formatDate(new Date())}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    },

    async importBackup(file: File): Promise<boolean> {
      try {
        const fileContent = await file.text()
        const backup = JSON.parse(fileContent)
        
        // Check backup version
        if (!backup.version || backup.version !== '1.0') {
          throw new Error('Incompatible backup version')
        }

        // Import projects
        this.projects = backup.projects
        
        // Import history if exists
        if (Array.isArray(backup.history)) {
          this.history = backup.history
        }

        // Save state and add history entry
        this.saveToLocalStorage(`Imported backup from ${backup.timestamp}`)
        
        return true
      } catch (error) {
        console.error('Error importing backup:', error)
        return false
      }
    },

    restoreFromHistory(timestamp: string): boolean {
      try {
        const historyEntry = this.getHistoryByDate(timestamp)
        if (!historyEntry) {
          console.error('No history entry found for date:', timestamp)
          return false
        }

        // Restore projects from history
        this.projects = [...historyEntry.projects]
        
        // Save restore information in history
        this.saveToLocalStorage(`Restored state from ${timestamp}`)
        
        return true
      } catch (error) {
        console.error('Error restoring from history:', error)
        return false
      }
    },

    clearProjects() {
      this.projects = []
      this.saveToLocalStorage()
    }
  }
})
