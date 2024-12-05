<template>
  <div class="app-layout">
    <nav class="navbar">
      <div class="nav-content">
        <RouterLink to="/" class="logo">
          TaskFlow
        </RouterLink>
        <div class="nav-links">
          <RouterLink to="/" class="nav-link">
            Dashboard
          </RouterLink>
          <RouterLink to="/projects" class="nav-link">
            Projects
          </RouterLink>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  padding: 0;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-content {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: var(--bg-color);
  text-decoration: none;
}

.nav-link.router-link-active {
  color: var(--primary-color);
  background-color: var(--bg-color);
}

.main-content {
  margin-top: 60px;
  flex: 1;
  background-color: var(--bg-color);
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* Media queries dla responsywności */
@media (max-width: 768px) {
  .nav-content {
    padding: 0 10px;
  }

  .logo {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-link {
    padding: 6px 8px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-content {
    padding: 0 5px;
  }

  .logo {
    font-size: 1rem;
  }

  .nav-links {
    gap: 5px;
  }

  .nav-link {
    padding: 4px 6px;
    font-size: 0.8rem;
  }
}
</style>
