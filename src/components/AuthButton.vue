<template>
  <button class="auth-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.auth-btn {
  padding: 12px;
  background-color: #5b73e8;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}
.auth-btn:hover {
  background-color: #3b54d1;
}
</style>
