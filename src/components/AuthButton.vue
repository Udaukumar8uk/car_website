<template>
  <button class="auth-btn" :type="type">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'button' }
})
</script>

<style scoped>
.auth-btn {
  background-color: #3498db;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.auth-btn:hover {
  background-color: #2980b9;
}
</style>
