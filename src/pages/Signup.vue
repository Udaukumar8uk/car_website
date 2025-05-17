<template>
  <AuthCard>
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignup">
      <AuthInput v-model="name" type="text" placeholder="Name" />
      <AuthInput v-model="email" type="email" placeholder="Email" />
      <AuthInput v-model="password" type="password" placeholder="Password" />
      <AuthInput v-model="confirmPassword" type="password" placeholder="Confirm Password" />
      <AuthButton>Sign Up</AuthButton>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </AuthCard>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthCard from '../components/AuthCard.vue';
import AuthInput from '../components/AuthInput.vue';
import AuthButton from '../components/AuthButton.vue';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

function handleSignup() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }
  const user = { name: name.value, email: email.value, password: password.value };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Registered successfully!');
  router.push('/login');
}
</script>
