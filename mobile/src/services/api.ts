import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.186:3333', // Android utilizar IP Config & Mac utilizar localhost.
});
