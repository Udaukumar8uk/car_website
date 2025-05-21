
<template>
  <div class="booking-step">
    <h2>Book Your Car: {{ carName }}</h2>
    <h3>Step 2: Select Payment Option</h3>
    <form @submit.prevent="emitGoToConfirmation">
      <label>
        <input type="radio" value="Netbanking" v-model="booking.paymentMethod" required />
        Netbanking
      </label>
      <label>
        <input type="radio" value="Cash on Delivery" v-model="booking.paymentMethod" />
        Cash on Delivery
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  </div>
</template>

<script setup>
const props = defineProps(['carName', 'booking'])
const emit = defineEmits(['navigate'])
function emitGoToConfirmation() {
  emit('navigate', 'confirmation')
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
label {
  display: block;
  margin-bottom: 1rem;
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