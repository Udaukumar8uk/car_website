<template>
  <div class="auth-card">
    <h1>{{ title }}</h1>
    <div class="content-area">
      <!-- content is hardcoded or passed as props, no slot -->
      <p v-if="isLogin">
        Don’t have an account? <button class="link-btn" @click="goToSignup">Sign up</button>
      </p>
      <p v-else>
        Already have an account? <button class="link-btn" @click="goToLogin">Login</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  isLogin: { type: Boolean, default: true }
})

const emit = defineEmits(['navigate'])

function goToSignup() {
  emit('navigate', 'signup')
}

function goToLogin() {
  emit('navigate', 'login')
}
</script>

<style scoped>
.auth-card {
  max-width: 400px;
  margin: 80px auto;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.link-btn {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font-size: 1em;
}
</style>
