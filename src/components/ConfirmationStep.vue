<template>
  <div class="booking-step confirmation">
    <h2>Book Your Car: {{ carName }}</h2>
    <h3>Booking Confirmed!</h3>
    <p>Your {{ carName }} has been booked successfully.</p>
    <p>Delivery to:</p>
    <p>{{ booking.address.name }}, {{ booking.address.street }}, {{ booking.address.city }} - {{ booking.address.zip }}</p>
    <p>Payment Method: {{ booking.paymentMethod }}</p>
    <router-link :to="'/home'">Back to Home</router-link>
  </div>
</template>

<script setup>
const props = defineProps(['carName', 'booking'])
</script>

<style scoped>
.booking-step {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fefefe;
  text-align: center;
  color: green;
}
</style>