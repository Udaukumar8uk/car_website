<template>
  <AuthCard title="Login" :isLogin="true" @navigate="navigate" />
  <LoginForm @login="handleLogin" />
</template>

<script setup>
import { useRouter } from 'vue-router'
import AuthCard from '../components/AuthCard.vue'
import LoginForm from '../components/LoginForm.vue'

const router = useRouter()

function handleLogin({ email, password }) {
  const storedUser = JSON.parse(localStorage.getItem('user'))

  if (!storedUser) {
    alert('No user found, please sign up.')
    return
  }

  if (storedUser.email === email && storedUser.password === password) {
    localStorage.setItem('loggedIn', 'true') 
    router.push('/welcome') 
  } else {
    alert('Invalid credentials')
  }
}

function navigate(page) {
  if (page === 'signup') {
    router.push('/signup')
  }
}
</script>
