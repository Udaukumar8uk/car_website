<template>
  <div class="booking-flow">
    <h2>Book Your Car: {{ carName }}</h2>

    <div v-if="step === 1">
      <h3>Step 1: Enter Delivery Address</h3>
      <form @submit.prevent="goToPayment">
        <div>
          <label>Name:</label>
          <input v-model="address.name" required />
        </div>
        <div>
          <label>Street:</label>
          <input v-model="address.street" required />
        </div>
        <div>
          <label>City:</label>
          <input v-model="address.city" required />
        </div>
        <div>
          <label>Zip Code:</label>
          <input v-model="address.zip" required />
        </div>
        <button type="submit">Next: Payment</button>
      </form>
    </div>

    <div v-if="step === 2">
      <h3>Step 2: Select Payment Option</h3>
      <form @submit.prevent="confirmBooking">
        <label>
          <input
            type="radio"
            value="Netbanking"
            v-model="paymentMethod"
            required
          />
          Netbanking
        </label>
        <label>
          <input
            type="radio"
            value="Cash on Delivery"
            v-model="paymentMethod"
          />
          Cash on Delivery
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>

    <div v-if="step === 3" class="confirmation">
      <h3>Booking Confirmed!</h3>
      <p>Your {{ carName }} has been booked successfully.</p>
      <p>Delivery to:</p>
      <p>
        {{ address.name }}, {{ address.street }}, {{ address.city }} - {{ address.zip }}
      </p>
      <p>Payment Method: {{ paymentMethod }}</p>
      <router-link to="/home">Back to Home</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const carName = route.params.carName || 'Car';

const step = ref(1);
const address = ref({
  name: '',
  street: '',
  city: '',
  zip: '',
});
const paymentMethod = ref('');

function goToPayment() {
  // You can add validation here if needed
  step.value = 2;
}

function confirmBooking() {
  step.value = 3;
}
</script>

<style scoped>
.booking-flow {
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

input[type='text'],
input[type='radio'] {
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

.confirmation {
  text-align: center;
  color: green;
}
</style>
