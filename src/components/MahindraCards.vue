<template>
  <div class="cards-container">
    <router-link
      v-for="car in cars"
      :key="car.id"
      :to="`/mahindra/${car.id}`"
      class="card-link"
    >
      <div class="car-card">
        <h3>{{ car.name }}</h3>
        <p>{{ car.model }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const cars = [
  { id: '100', name: 'Mahindra 100', model: 'XUV100' },
  { id: '200', name: 'Mahindra 200', model: 'XUV200' },
  { id: '300', name: 'Mahindra 300', model: 'XUV300' },
  { id: '400', name: 'Mahindra 400', model: 'XUV400' }
];
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding: 2rem;
}
.card-link {
  text-decoration: none;
  color: inherit;
}
.car-card {
  background: #f9f9f9;
  padding: 1rem;
  width: 200px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.car-card:hover {
  transform: scale(1.05);
}
</style>
