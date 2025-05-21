<template>
  <AuthCard title="Sign Up" :isLogin="false" @navigate="navigate" />
  <SignupForm @signup="handleSignup" />
</template>

<script setup>
import { useRouter } from 'vue-router'
import AuthCard from '../components/AuthCard.vue'
import SignupForm from '../components/SignupForm.vue'

const router = useRouter()

function handleSignup({ email, password }) {
  const user = { email, password };
  localStorage.setItem('user', JSON.stringify(user));
  alert('Signup successful! Please log in.');
  router.push('/login');
}


function navigate(page) {
  if (page === 'login') {
    router.push('/login')
  }
}
</script>
