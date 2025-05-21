<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
  localStorage.removeItem('loggedIn')
  router.push('/login')
}
</script>

<template>
  <div class="footer">
    <button class="logout-btn" @click="logout">Logout</button>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #eee;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;
  z-index: 1000; /* keep it above other elements */
}

.logout-btn {
  padding: 0.5rem 1rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #c0392b;
}
</style>
