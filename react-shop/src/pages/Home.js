import API from "../services/api"

export default function Home() {
    API.auth().then((response) => {
        console.log('response', response);
    })


    return <div>Product List</div>
}
