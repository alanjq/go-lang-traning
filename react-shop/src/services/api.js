const API_URL = "https://pininos.zuwu.us/index.php/rest/V1"

const callApi = async (endpoint, config) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
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
