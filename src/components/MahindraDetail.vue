<template>
  <div class="car-detail">
    <h2>Car Details</h2>
    <p><strong>Name:</strong> {{ car.name }}</p>
    <p><strong>Model:</strong> {{ car.model }}</p>
    <p><strong>Year:</strong> {{ car.year }}</p>
    <p><strong>Price:</strong> {{ car.price }}</p>
    <button class="book-btn" @click="bookCar">Book Now</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const carId = route.params.id;
const car = ref({});

const cars = {
  '100': { name: 'Mahindra 100', model: 'XUV100', year: 2022, price: '$10,000' },
  '200': { name: 'Mahindra 200', model: 'XUV200', year: 2023, price: '$12,000' },
  '300': { name: 'Mahindra 300', model: 'XUV300', year: 2024, price: '$14,000' },
  '400': { name: 'Mahindra 400', model: 'XUV400', year: 2024, price: '$16,000' }
};

onMounted(() => {
  car.value = cars[carId] || { name: 'Unknown', model: '-', year: '-', price: '-' };
});

function bookCar() {
  router.push(`/booking/${carId}`);
}
</script>

<style scoped>
.car-detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.book-btn {
  margin-top: 1rem;
  background-color: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
