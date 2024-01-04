export default function Price({ value }) {
    const formattedValue = Intl.NumberFormat("es-MX", { style: "currency", "currency": "MXN" }).format(value);
    return (<p className="mt-1 text-gray-900">{formattedValue}</p>)
}
