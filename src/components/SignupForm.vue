<template>
  <form @submit.prevent="onSubmit">
    <AuthInput v-model="name" type="text" placeholder="Name" />
    <AuthInput v-model="email" type="email" placeholder="Email" />
    <AuthInput v-model="password" type="password" placeholder="Password" />
    <AuthInput v-model="confirmPassword" type="password" placeholder="Confirm Password" />
    <AuthButton label="Sign Up" type="submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AuthInput from './AuthInput.vue'
import AuthButton from './AuthButton.vue'

const emit = defineEmits(['signup'])

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function onSubmit() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  emit('signup', { name: name.value, email: email.value, password: password.value })
}
</script>
