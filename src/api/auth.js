import axios from "./axios";


axios.defaults.headers.post['X-CSRFToken'] = 'Gt7aOVqk4OpcRHfcNMmf2HRSn4CbBLHYLo7vUVz99UYM30kIxvU6et6pgnwsw5Z2';

export const LoginRequest = ( rfc ) => axios.post(`/login/`,{rfc: rfc});