import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333', // Android utilizar IP Config & Mac utilizar localhost.
});
