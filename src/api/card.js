
import axios from "./axios";
//traer
export const getCardsRequest = ( id ) => axios.get(`/tarjetas_usuario/${ id }`);

export const getCardRequest = ( id ) => axios.get(`tarjetas/${ id }`);
//crear
export const createCardRequest = ( card ) => axios.post(`tarjetas/`, card);
//actualizar
export const updateCardRequest = ( id, card ) => axios.put(`tarjetas/${ id }/`, card);
//eliminar
export const deletCardRequest = ( id ) => axios.delete(`tarjetas/${ id }/`);

