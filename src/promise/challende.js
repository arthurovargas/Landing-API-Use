import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// function fetchData(urlAPI) {
//   return fetch(urlAPI);
// }

// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => console.log(products))
//   .catch((error) => console.log(error));

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi) {
  return fetch(urlApi).then((response) => response.json());
}

fetchData(`${API}/products`)
  .then((products) => {
    console.log(products[0]);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((product) => {
    console.info(product.title);
    return fetchData(`${API}/categories/${product?.category?.id}`);
  })
  .then((category) => {
    console.info(category.name);
  })
  .catch((err) => {
    console.error(err);
  });
