import { Link } from 'react-router-dom'

export default function Description({ value, sku, url }) {
    return (<h3 className="mt-1 font-semibold text-gray-900">
        <Link to={`/product/${url}`} state={{ sku }}>
            <span className="absolute inset-0" />
            {value}
        </Link>
    </h3>)
}
