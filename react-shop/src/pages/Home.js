import ProductList from "../sections/ProductList"
import API from "../services/api"
import { useState, useEffect } from 'react'


export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        API.products().then((data) => setProducts(data?.items || []))
    }, [])

    return <div className="bg-white">
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
                <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                    See everything
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>

            <ProductList products={products} />

            <div className="mt-12 flex px-4 sm:hidden">
                <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    See everything
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </div>
    </div>
}
