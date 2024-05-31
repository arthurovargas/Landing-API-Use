import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors', //Permisos
        credentials: 'same-origin', //No hay autenticación
        headers: {
            'Content-Type': 'application/json' // Contenido de los datos enviados
        },
        body: JSON.stringify(data) // Convierte e atexto el objeto data
    });
    return response;
}

const data = {
    "title": "Random Chair",
    "price": 35,
    "description": "a random chair from anywhere in the world",
    "categoryId": 1,
    "images": ["https://loremflickr.com/320/240/chair"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));