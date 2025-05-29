<script setup lang="ts">

import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>

  <nav>
    <div class="menu-icon" @click="toggleMenu">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </div>

    <div class="nav-links" :class="{ show: isMenuOpen }">
      <router-link to="/" @:click="isMenuOpen=false">Home</router-link>
      <router-link to="/about" @:click="isMenuOpen=false">Sobre Mí</router-link>
      <router-link to="/projects" @:click="isMenuOpen=false">Proyectos</router-link>
      <router-link to="/contact" @:click="isMenuOpen=false">Contactame</router-link>
    </div>
  </nav>


</template>

<style>

nav {
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  position: relative;
}

.menu-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.menu-icon span {
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  transition: 0.3s;
}

/* Animación hamburguesa */
.menu-icon span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.menu-icon span.open:nth-child(2) {
  opacity: 0;
}
.menu-icon span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav-links {
  display: flex;
  gap: 40px;
}

nav a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--accent-color);
}

/* RESPONSIVE: para pantallas pequeñas */
@media (max-width: 768px) {

  nav {
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  position: relative;
}

  .menu-icon {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    flex-direction: column;
    background-color: var(--background-color);
    width: 100%;
    padding: 1rem;
    gap: 20px;
    z-index: 100;
  }

  .nav-links.show {
    display: flex;
    align-items: center;
    background-color: darkgrey;
  }
}
</style>