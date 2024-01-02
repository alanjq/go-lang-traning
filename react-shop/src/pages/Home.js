import API from "../services/api"

export default function Home() {
    API.products()


    return <div>Product List</div>
}
