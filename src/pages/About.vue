<script setup lang="ts">
import img1 from '../assets/img/ANDRES_ CV.jpg'

const techStack = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'React Native', icon: 'devicon-react-original colored' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express', icon: 'devicon-express-original' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Jest', icon: 'devicon-jest-plain colored' },
];

</script>

<template>
    <!-- <h1>Sobre Mi</h1> -->
    <div class="contenedor" >
        <div class="hijo">
             <img class="img" :src="img1" alt="Foto de Andrés" />
        </div>
        <div class="hijo">
            <h1>Hola, soy Andres Morales</h1>
            <h2>Desarrollador Frontend</h2>
            <p>Soy desarrollador frontend con experiencia construyendo 
            interfaces web modernas, dinámicas y responsivas. Me especializo en tecnologías como React, React Native, Vue, Angular 
            TypeScript, HTML, CSS y consumo de APIs REST. Me apasiona crear experiencias de usuario intuitivas 
            y eficientes, cuidando tanto el diseño como el rendimiento. He trabajado en proyectos personales, 
            freelance y con equipos distribuidos, y siempre estoy en constante aprendizaje para mantenerme al día con 
            las mejores prácticas y tendencias del desarrollo web.</p>
            <button class="button">
              <i class="fas fa-download"></i> Descargar CV
            </button>
        </div>
    </div>

     <section class="stack">
                <h2>Tecnologías que uso</h2>
                <div class="icons">
                <div class="icon" v-for="tech in techStack" :key="tech.name">
                    <i :class="tech.icon"></i>
                    <span>{{ tech.name }}</span>
                </div>
                </div>
            </section>

</template>

<style scoped>

  .contenedor {
  display: flex;
  align-items: center; /* Centra verticalmente el contenido */
  justify-content: center;
  width: 1200px;
  max-width: 100%;
  margin: auto;
  /* border: 5px solid darkgray; */
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap; /* Permite que se adapte en pantallas pequeñas */
}

.hijo {
  flex: 1;
  min-width: 300px; /* Evita que colapsen en pantallas chicas */
}

.img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 50px;
}


.hijo h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

.hijo h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
  text-align: left;
}

.hijo p {
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  max-width: 600px;
}


.stack {
  text-align: center;
  padding: 2rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;
}

.icon span {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-color, #333);
}

button {
  background: transparent;
  color: #1e90ff;
  padding: 10px 22px;
  border: 2px solid #1e90ff;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #1e90ff;
  color: white;
}



@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
    text-align: center;
  }


  .img {
    width: 300px;
    margin-right: 60px;
  }
  .hijo h1, .hijo h2, .hijo p   {
    text-align: center;
    margin-right: 50px;
  }

  .button {
    margin-right: 50px;
  }
  
}


</style>