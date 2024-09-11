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
    .then((response => response.json()))
    .then((data) => {
        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt);
            return data;
        }
    })
    .catch(err => console.log(err))
}