const API_URL = "http://pininos.zuwu.us/index.php/rest/V1"

const callApi = (endpoint, config) => fetch(`${API_URL}/${endpoint}`, config)
    .then((response) => {
        console.log('response', response);
        if (response.status === 200) {
            return response.json()
        }
        throw new Error(response)
    })

export const API = {
    // auth: () => callApi('integration/admin/token'),
    products: () => callApi('products')
        .then((data) => {
            console.log('data', data);
        })
        .catch((err) => {
            console.log(('FALLÓ', err.message));
        })
}


export default API
