
import axios from "./axios";
import Cookie from 'js-cookie';

export const checkCSRFToken = () => {

    const csrftoken = Cookie.get('csrftoken');

    axios.defaults.headers.post['X-CSRFToken'] = csrftoken;

    axios.defaults.headers.put['X-CSRFToken'] = csrftoken;

    axios.defaults.headers.delete['X-CSRFToken'] = csrftoken;
}

export const LoginRequest = ( rfc ) => axios.post(`/login/`,{rfc: rfc});