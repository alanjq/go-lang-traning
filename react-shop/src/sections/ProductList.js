/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//     {
//         id: 1,
//         name: 'Machined Pen',
//         color: 'Black',
//         price: '$35',
//         href: '#',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
//         imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
//         availableColors: [
//             { name: 'Black', colorBg: '#111827' },
//             { name: 'Brass', colorBg: '#FDE68A' },
//             { name: 'Chrome', colorBg: '#E5E7EB' },
//         ],
//     },
//     // More products...
// ]

import Product from "../components/Product"

export default function ProductList({ products }) {
    if (!Array.isArray(products)) {
        return null
    }

    if (products.length === 0) {
        return <div className="my-4">No products found.</div>
    }

    return (<div className="relative mt-8">
        <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                role="list">
                {products.map((product) => <Product key={product.id} data={product} />)}
            </ul>
        </div>
    </div>)
}
