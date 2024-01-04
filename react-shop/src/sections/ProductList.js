import ProductItem from "../components/Product/ProductItem"

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
        {products.map((product) => <ProductItem key={product.id} data={product} />)}
      </ul>
    </div>
  </div>)
}
