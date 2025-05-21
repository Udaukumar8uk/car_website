<template>
  <div class="auth-card">
     <slot /> 
  </div>
</template>

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
</style>