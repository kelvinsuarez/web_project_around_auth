const BASE_URL = "https://register.nomoreparties.co";

export const register = ({username, email, password}) => {
    return fetch(`${BASE_URL}/signug`, {
        method: 'POST',
        headers:{
            Accept: 'application/jason', 'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.error){
            throw new Error(data.error)
        }
        console.log(data)
    })
    .catcha((err) => console.log(err));
}