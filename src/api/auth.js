import axios from "./axios";

export const LoginRequest = ( rfc ) => axios.post(`/login`, rfc );