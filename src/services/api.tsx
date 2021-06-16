import axios from 'axios';

// Cria a API com o endereço base
const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export default api;