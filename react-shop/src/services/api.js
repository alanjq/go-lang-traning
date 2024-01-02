const API_URL = "https://pininos.zuwu.us/index.php/rest/V1"
const TEMPORARY_TOKEN = "eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjIsInV0eXBpZCI6MiwiaWF0IjoxNzA0MjA3NjExLCJleHAiOjE3MDQyMTEyMTF9.ZTvRNxsrr2adScAJhiMRzFTQqAvZXnogL88BP0CeQOw"

const callApi = async (endpoint, config) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TEMPORARY_TOKEN}`
        },
        ...config
    };

    try {
        const response = await fetch(`${API_URL}/${endpoint}`, options);
        const data = await response.json();
        return console.log(data);
    } catch (err) {
        return console.error(err);
    }
}


export const API = {
    auth: () => callApi('integration/admin/token', {
        method: 'POST',
        // mode: 'no-cors',
        body: '{"username":"Qj9TRxKDzBn5ScPyLsuArfVH2gGMXwah","password":"g6rHmXa5bd9pLVzxjQk2nEG3e7Z8uCqK"}'
    }),
    products: () => callApi('products')
        .then((data) => {
            console.log('data', data);
        })
        .catch((err) => {
            console.log(('FALLÓ', err));
        })
}


export default API
