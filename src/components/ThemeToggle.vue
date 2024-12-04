<template>
  <button 
    class="theme-toggle" 
    @click="toggleTheme" 
    :title="isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <i :class="isDarkTheme ? 'fas fa-sun' : 'fas fa-moon'"></i>
    {{ isDarkTheme ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDarkTheme = ref(false)

const setTheme = (dark: boolean) => {
  isDarkTheme.value = dark
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  console.log('Theme changed to:', dark ? 'dark' : 'light') // Debug log
}

const toggleTheme = () => {
  setTheme(!isDarkTheme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark))

  // Nasłuchuj zmian preferencji systemowych
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches)
    }
  })
})
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.theme-toggle:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.theme-toggle i {
  font-size: 1.1rem;
}
</style>
