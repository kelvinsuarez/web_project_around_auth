const BASE_URL = "https://tripleten.desarrollointerno.com";

export const register = ({email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((res) => {
        if (!res.ok) {
            if (res.status === 500) {
                return Promise.reject("Este usuario ya está registrado.");
            } else if (res.status === 400) {
                return Promise.reject("Uno de los campos se rellenó de forma incorrecta.")
            } else {
                return Promise.reject(`Error: ${res.statusText}`)
            }
        }
        return res.json()
    })
    .catch((err) => {
        return Promise.reject(err);
    });
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((response) => {
        if (!response.ok) {
            if (response.status === 401) {
                return Promise.reject('No se ha encontrado al usuario con el correo electrónico especificado');
            } else if (response.status === 400) {
                return Promise.reject("Uno de los campos se rellenó de forma incorrecta.")
            } else {
                return Promise.reject(`Error: ${response.statusText}`)
            }
        }
        return  response.json()
    })
    .then((data) => {
        if (data.token) {
            console.log("Token JWT recibido:", data.token);
            localStorage.setItem('jwt', data.token);
            console.log("Token almacenado en localStorage:", localStorage.getItem('jwt'))
            return data;
        } else {
            throw new Error('No se recibio ningún token JWT')
        }
    })
    .catch((err) =>{
        return Promise.reject(err);
    })
};

export const checkToken = (token) => {
    return fetch (`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`, 
        }
    })
    .then(res => {
        if (!res.ok) {
            if (res.status === 400) {
                return Promise.reject("Token no proporcionado o proporcionado en el formato incorrecto")
            } else if (res.status === 401) {
                return Promise.reject("El token provisto es inválido")
            } else {
                return Promise.reject(`Error: ${res.statusText}`)
            }
        }
        return res.json()
    })
    .then(data => data)
    .catch(err => {
        console.error('Error checking token:', err);
        return Promise.reject(err) 
    })
}