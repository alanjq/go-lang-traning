//#region Mockup data
import mockupProducts from '../mock/products.json'
import mockupAuth from '../mock/auth.json'
//#endregion / Mockup data

const useMocks = false
export const STORE_URL = "https://pininos.zuwu.us/index.php/rest/V1"
const TEMPORARY_TOKEN = "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzA0Mjg5NTc4LCJleHAiOjE3MDQyOTMxNzh9.h_BQRNGnKOmUroSjM9XKkCwWdKTSXdthIllXln3TPHs"

const callApi = async (endpoint, config) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TEMPORARY_TOKEN}`
        },
        ...config
    };

    try {
        const response = await fetch(`${STORE_URL}/${endpoint}`, options);
        const data = await response.json();
        return console.log(data);
    } catch (err) {
        return console.error(err);
    }
}

const callMock = async (response) => response


export const API = {
    auth: () => useMocks ? callMock(mockupAuth) : callApi('integration/admin/token', {
        method: 'POST',
        body: '{"username":"Qj9TRxKDzBn5ScPyLsuArfVH2gGMXwah","password":"g6rHmXa5bd9pLVzxjQk2nEG3e7Z8uCqK"}'
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
