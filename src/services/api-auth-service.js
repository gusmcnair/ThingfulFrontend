import config from '../config'

const ApiAuthService = {
    postLogin(credentials) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
    },
    postUser(user){
        console.log('hello!')
        return fetch(`http://localhost:8000/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
    }
}

export default ApiAuthService