import config from 'config';
import {handleResponse} from "@/helpers/handle-response";
import {authHeader} from "@/services/authService";


export const restService = {
    putMoney,
    withdraw,
    transfer,
    getBalance
};

function putMoney(amount) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(amount)
    };

    return fetch(`${config.apiUrl}/put`, requestOptions).then(handleResponse);
}

function withdraw(amount) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(amount)
    };
    fetch(`${config.apiUrl}/withdraw`, requestOptions).then(handleResponse);
}

function transfer(username, amount) {

    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({username, amount})
    };
    fetch(`${config.apiUrl}/transfer`, requestOptions).then(handleResponse);
}

async function getBalance() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    const response = await fetch(`${config.apiUrl}/balance`, requestOptions);

    return response.json();
}