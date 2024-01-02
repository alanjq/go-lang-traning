import { STORE_URL } from "../services/api"

export default function Product({ data }) {
    const image = `https://pininos.zuwu.us/media/catalog/product/${data.media_gallery_entries[0]?.file}`

    return (
        <li key={data.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                    <img
                        src={image}
                        alt={data.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-500">{data.color}</p>
                    <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={data.href}>
                            <span className="absolute inset-0" />
                            {data.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-gray-900">{data.price}</p>
                </div>
            </div>

            <h4 className="sr-only">Available colors</h4>
            {/* <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                {data.availableColors.map((color) => (
                    <li
                        key={color.name}
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: color.colorBg }}
                    >
                        <span className="sr-only">{color.name}</span>
                    </li>
                ))}
            </ul> */}
        </li>
    )
}
