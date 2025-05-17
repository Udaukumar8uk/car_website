<template>
  <div class="home-container">
    <h2 class="home-title">Choose Your Car Brand</h2>
    <div class="card-container">
      <div
        v-for="car in cars"
        :key="car.name"
        class="car-card"
        @click="goToCarPage(car)"
        :class="{ clickable: car.route }"
      >
        <img :src="car.image" :alt="car.name" class="car-image" />
        <h3 class="car-name">{{ car.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const cars = [
  {
    name: 'Mahindra',
    image: '/mahindra.jpg',
    route: '/mahindra' // 👈 only Mahindra has a route
  },
  {
    name: 'Tata',
    image: '/tata.jpg'
  },
  {
    name: 'Maruti Suzuki',
    image: '/maruti.jpg'
  },
  {
    name: 'Hyundai',
    image: '/hyundai.jpg'
  }
]

function goToCarPage(car) {
  if (car.route) {
    router.push(car.route)
  }
}
</script>

<style scoped>
.home-container {
  padding: 2rem;
  text-align: center;
  background-color: #f9fafb;
}

.home-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.car-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  width: 220px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.car-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.car-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}

.car-name {
  margin-top: 0.75rem;
  font-size: 1.1rem;
  color: #34495e;
}

.clickable {
  cursor: pointer;
}
</style>
