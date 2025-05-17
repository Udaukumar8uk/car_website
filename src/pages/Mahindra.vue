<template>
  <div class="mahindra-container">
    <h2>Mahindra Models</h2>
    <div class="model-card-container">
      <router-link
        v-for="model in mahindraModels"
        :key="model.name"
        :to="`/mahindra/${model.id}`"
        class="model-card"
      >
        <img :src="model.image" :alt="model.name" class="model-image" />
        <h3>{{ model.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const mahindraModels = [
  { id: '100', name: 'Mahindra 100', image: '/mahindra100.jpg' },
  { id: '200', name: 'Mahindra 200', image: '/mahindra200.jpg' },
  { id: '300', name: 'Mahindra Thar', image: '/thar.jpg' },
  { id: '400', name: 'Mahindra Scorpio', image: '/scorpio.jpg' },
];
</script>

<style scoped>
.mahindra-container {
  padding: 2rem;
  text-align: center;
}

.model-card-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.model-card {
  background: #f7f7f7;
  padding: 1rem;
  width: 220px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.model-card:hover {
  transform: scale(1.05);
}

.model-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
</style>
