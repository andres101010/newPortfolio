import axios from "axios";
import type { SolicitudData } from "../interfaces/solicitud";



const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // https://tu-api.com/api

export const sendSolicitud = async (contact: SolicitudData) => {
  const response = await axios.post(`${apiUrl}/contacto/crear-solicitud`, contact);
  return response.data;
}