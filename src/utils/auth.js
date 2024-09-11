const BASE_URL = "https://tripleten.desarrollointerno.com";

export const register = ({email, password}) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers:{
            Accept: 'application/json', 'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.error){
            throw new Error(data.error)
        }
        console.log(data)
    })
    .catch((err) => console.log(err));
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
            return response.json().then((err) => {
                throw new Error(`Error: ${response.status} - ${err.message}`)
            })
        }
        return  response.json()
    })
    .then((data) => {
        if (data.jwt) {
            console.log("Token JWT recibido:", data.jwt);
            localStorage.setItem('jwt', data.token);
            console.log("Token almacenado en localStorage:", localStorage.getItem('jwt'))
            return data;
        } else {
            throw new Error('No se recibio ningun token JWT')
        }
    })
    .catch(err => console.log(err))
}