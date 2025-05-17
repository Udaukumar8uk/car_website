<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>Have questions, feedback, or need support? We're here to help!</p>

    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input id="name" v-model="form.name" required />

      <label for="email">Email:</label>
      <input id="email" type="email" v-model="form.email" required />

      <label for="message">Message:</label>
      <textarea id="message" rows="5" v-model="form.message" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

function submitForm() {
  alert(`Thanks, ${form.name}! We'll get back to you soon.`);
  form.name = '';
  form.email = '';
  form.message = '';
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 10px;
}

label {
  display: block;
  margin-top: 1rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
