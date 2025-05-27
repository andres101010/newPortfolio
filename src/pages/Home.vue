<script setup lang="ts">
// import Nav from './Nav.vue';

</script>

<template>

    <div>
    <!-- <Nav /> -->
    <header>
      <h1>ANDRÉS RICARDO MORALES</h1>
      <h2>Frontend Developer</h2>
      <p>
        Soy desarrollador frontend enfocado en crear interfaces web modernas, accesibles y optimizadas. Me apasiona transformar ideas en experiencias digitales intuitivas y visualmente atractivas.
      </p>
      <button>Explora mi portafolio</button>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/andres-ricardo-morales-b56830234/"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/andres101010"><i class="fab fa-github"></i></a>
        <a href="https://www.facebook.com/andres.morales.144181"><i class="fab fa-facebook-f"></i></a>
      </div>
    </header>
  </div>

</template>

<style scoped>



header {
  text-align: center;
  padding: 4rem 1rem;
}

header h1 {
  font-size: 3rem;
  margin: 0.5rem 0;
  letter-spacing: 2px;
}

header h2 {
  font-size: 2rem;
  font-weight: normal;
  color: var(--accent-color);
}

header p {
  max-width: 600px;
  margin: 1rem auto 2rem;
  font-size: 1rem;
  line-height: 1.6;
}

button {
  background: var(--button-bg);
  color: var(--text-color);
  border: var(--button-border);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

button:hover {
  background: var(--button-hover-bg);
}

.social-icons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icons a {
  color: var(--text-color);
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--accent-color);
}

</style>