<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="auth-input"
  />
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.auth-input {
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}
.auth-input:focus {
  outline: none;
  border-color: #2c3e50;
}
</style>
