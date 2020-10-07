import {handleResponse} from "@/helpers/handle-response";
import config from 'config';


export const authService = {
    login,
    logout,
    authHeader
};

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.authdata) {
        return {
            'Authorization': 'Basic ' + user.authdata,
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}