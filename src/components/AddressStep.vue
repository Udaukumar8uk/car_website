<template>
  <div class="booking-step">
    <h2>Book Your Car: {{ carName }}</h2>
    <h3>Step 1: Enter Delivery Address</h3>
    <form @submit.prevent="emitGoToPayment">
      <div>
        <label>Name:</label>
        <input v-model="booking.address.name" required />
      </div>
      <div>
        <label>Street:</label>
        <input v-model="booking.address.street" required />
      </div>
      <div>
        <label>City:</label>
        <input v-model="booking.address.city" required />
      </div>
      <div>
        <label>Zip Code:</label>
        <input v-model="booking.address.zip" required />
      </div>
      <button type="submit">Next: Payment</button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(['carName', 'booking'])
const emit = defineEmits(['navigate'])
function emitGoToPayment() {
  emit('navigate', 'payment')
}
</script>

<style scoped>
.booking-step {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fefefe;
}
form div {
  margin-bottom: 1rem;
}
input {
  margin-left: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
  background: #e74c3c;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
</style>
