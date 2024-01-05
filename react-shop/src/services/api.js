//#region Mockup data
import mockupProducts from '../mock/products.json'
import mockupAuth from '../mock/auth.json'
//#endregion / Mockup data

// console.log('VAriables', process.env.API_URL);
const useMocks = process.env.USE_LOCAL_API == "true"
export const STORE_URL = process.env.API_URL;

const callApi = async (endpoint, config) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.TOKEN}`
        },
        ...config
    };

    try {
        const response = await fetch(`${STORE_URL}/${endpoint}`, options);
        const data = await response.json();
        return data
    } catch (err) {
        return console.error(err);
    }
}

const callMock = async (response) => response


export const API = {
    auth: () => useMocks ? callMock(mockupAuth) : callApi('integration/admin/token', {
        method: 'POST',
        body: `{"username":"${process.env.AUTH_USER}","password":"${process.env.AUTH_PSWD}"}`
    }),
    products: () => useMocks ? callMock(mockupProducts) : callApi('products')
        .then((data) => {
            console.log('data', data);
        })
        .catch((err) => {
            console.log(('FALLÓ', err));
        })
}


export default API
