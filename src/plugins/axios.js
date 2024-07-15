import axios from 'axios';

const token = localStorage.getItem('token');

const headers_padrao = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const headers = !token ? headers_padrao : { ...headers_padrao, 'Authorization': `Bearer ${token}` }

const instance = axios.create({
  baseURL: 'http://localhost:10000/api', // substitua pela URL base da sua API
  timeout: 1000,
  headers: headers
});

export default instance;
