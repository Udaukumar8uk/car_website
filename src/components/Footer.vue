<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <button @click="logout" class="logout-btn">Logout</button>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function logout() {
  localStorage.clear(); // or remove auth token if used
  router.push('/login');
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #eee;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
}
.logout-btn {
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
