<template>
  <AuthCard>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <AuthInput v-model="email" type="email" placeholder="Email" />
      <AuthInput v-model="password" type="password" placeholder="Password" />
      <AuthButton>Login</AuthButton>
    </form>
    <p>Don’t have an account? <router-link to="/signup">Sign up</router-link></p>
  </AuthCard>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthCard from '../components/AuthCard.vue';
import AuthInput from '../components/AuthInput.vue';
import AuthButton from '../components/AuthButton.vue';

const router = useRouter();
const email = ref('');
const password = ref('');

function handleLogin() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (!storedUser) {
    alert('No user found, please sign up.');
    return;
  }
  if (storedUser.email === email.value && storedUser.password === password.value) {
    localStorage.setItem('loggedIn', 'true');
    router.push('/welcome');
  } else {
    alert('Invalid credentials');
  }
}
</script>
