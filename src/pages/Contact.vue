<script setup lang="ts">
import { ref } from 'vue';
import TableForm from '../components/TableForm.vue';

const textButton = ref(false)

const toggleFormulario = () => {
  textButton.value = !textButton.value
}

</script>

<template>

 <div class="container" v-if="!textButton">
    <h1>Necesitas Mas Informacion ?</h1>
    <h2>Tienes Un Proyecto En Mente y No Sabes Por Donde Empezar ?</h2>
    <p>Puedes Escribirme Directamente: </p>
       <div class="contacto">
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=andreschapu5259@gmail.com&su=Consulta&body=Hola%20Markitos,%20quisiera%20consultar..."
                target="_blank"
                class="contacto-link"
            >
                <i class="fas fa-envelope contacto-icono"></i>
                <span class="contacto-texto">andreschapu5259@gmail.com</span>
            </a>
        </div>
    <a href="https://wa.me/5493884535200" target="_blank" class="btn-whatsapp">
         <i class="fab fa-whatsapp"></i> Enviar mensaje
    </a>
    <p>O Puedes Mandarme Una Solicitud</p>
 </div>

 <div class="form">
    <button class="form-toggle-btn"  @click="toggleFormulario"> {{ textButton ? 'Cerrar Formulario' : 'Abrir Formulario' }} </button>

    <TableForm  v-if="textButton" :textButton="textButton" @close-form="textButton = false"  />
 </div>

</template>

<style scoped>


.container {

    text-align: center;
   
}

.form {
 text-align: center;
}

.contacto {
  margin-top: 20px;
  margin-bottom: 20px;
}

.contacto-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  background-color: #f1f1f1;
  color: #333;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.contacto-link:hover {
  background-color: #d93025;
  color: white;
}

.contacto-icono {
  margin-right: 8px;
  font-size: 1.2rem;
}


.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.btn-whatsapp i {
  margin-right: 8px;
  font-size: 1.2rem;
}

.btn-whatsapp:hover {
  background-color: #1ebe5d;
  transform: translateY(-2px);
}

.form-toggle-btn {
  padding: 12px 20px;
  background-color: #1e40af; /* Azul oscuro */
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-toggle-btn:hover {
  background-color: #1d4ed8; /* Azul un poco más claro */
  transform: translateY(-2px);
}

.form-toggle-btn:active {
  background-color: #1e3a8a;
  transform: scale(0.97);
}


</style>