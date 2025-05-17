<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <!-- <li><button @click="handleLogout" class="logout-btn">Logout</button></li> -->
      </ul>
    </nav>

    <section class="hero-section">
      <img :src="imageUrl" alt="Car Showroom" />
      <div class="hero-text">
        <h1>Welcome to Car Showroom </h1>
        <p>Book your favorite car online with ease.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const imageUrl = '/car-banner.jpeg'; // Ensure this image is placed inside your public/ folder

function handleLogout() {
  localStorage.removeItem('loggedIn');
  router.push('/login');
}
</script>

<style scoped>
.navbar {
  background-color: #222;
  padding: 1rem 2rem;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin: 0;
  padding: 0;
}
.navbar li {
  color: #fff;
}
.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
.navbar a.router-link-exact-active {
  border-bottom: 2px solid #fff;
}
.logout-btn {
  background-color: #e74c3c;
  border: none;
  padding: 0.4rem 1rem;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.hero-section {
  position: relative;
  text-align: center;
  color: white;
}

.hero-section img {
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  filter: brightness(0.6);
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #e74c3c;
}

.hero-text p {
  font-size: 1.5rem;
  color: #f1f1f1;
}
</style>
