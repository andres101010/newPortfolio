<script setup lang="ts">
import { ref } from 'vue'
import { sendSolicitud } from '../services/solicitud.js'
import Swal from 'sweetalert2'

const emit = defineEmits<{
  (e: 'close-form'): void
}>()

const nombre = ref('')
const correo = ref('')
const telefono = ref('')
const solicitud = ref('')
const comentario = ref('')

const enviarFormulario = async () => {
  const value = {
    nombre: nombre.value,
    correo: correo.value,
    telefono: telefono.value,
    solicitud: solicitud.value,
    comentario: comentario.value
  }
  // Aquí podrías emitir un evento, llamar una API, etc.
  try {
    await sendSolicitud(value)

    Swal.fire({
    title: 'Solicitud enviada',
    text: 'Gracias por contactarnos. Te responderemos pronto.',
    icon: 'success',
    confirmButtonText: 'OK'
    })
    
    nombre.value = ''
    correo.value = ''
    telefono.value = ''
    solicitud.value = ''
    comentario.value = ''

     emit('close-form')
  } catch (error) {
    console.log(error)
      Swal.fire({
      title: 'Error',
      text: 'Ocurrió un problema al enviar tu solicitud. Intenta nuevamente más tarde.',
      icon: 'error',
      confirmButtonText: 'OK'
    })
    throw error
  }
}

</script>

<template>

  <form class="form-container" @submit.prevent="enviarFormulario">
    <h2>Formulario de Contacto</h2>

    <label>
      Nombre
      <input type="text" v-model="nombre" placeholder="Tu nombre completo" required />
    </label>

    <label>
      Correo
      <input type="email" v-model="correo" placeholder="tuemail@ejemplo.com" required />
    </label>

    <label>
      Teléfono
      <input type="tel" v-model="telefono" placeholder="+54 9..." />
    </label>

    <label>
      Solicitud
      <input type="text" v-model="solicitud" placeholder="¿Qué necesitas?" />
    </label>

    <label>
      Comentario
      <textarea v-model="comentario" placeholder="Agrega un comentario..." rows="4"></textarea>
    </label>

    <button type="submit">Enviar</button>
  </form>

</template>

<style>

.form-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h2 {
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 10px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #374151;
}

input,
textarea {
  margin-top: 6px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #2563eb;
  outline: none;
}

button {
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #1e40af;
  transform: translateY(-2px);
}

button:active {
  transform: scale(0.98);
}

</style>