<template>
  <form @submit.prevent="onSubmit">
    <AuthInput v-model="email" type="email" placeholder="Email" />
    <AuthInput v-model="password" type="password" placeholder="Password" />
    <AuthButton label="Login" type="submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AuthInput from './AuthInput.vue'
import AuthButton from './AuthButton.vue'

const emit = defineEmits(['login'])

const email = ref('')
const password = ref('')

function onSubmit() {
  emit('login', { email: email.value, password: password.value })
}
</script>
