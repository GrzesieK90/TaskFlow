import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
// Import stylów
import './assets/main.css';
// Inicjalizacja motywu
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', savedTheme || (prefersDark ? 'dark' : 'light'));
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
