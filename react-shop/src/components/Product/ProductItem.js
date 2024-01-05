import AddToCart from "./AddToCart"
import Description from "./Description"
import ImageCarousel from "./ImageCarousel"
import Price from "./Price"

export default function ProductItem({ data }) {
    const url = data?.custom_attributes?.find((r) => r?.attribute_code === 'url_key').value

    return (
        <li key={data.id} className="inline-flex w-64 flex-col text-center lg:w-auto hover:border">
            <div className="group relative">
                <div className="w-full overflow-hidden rounded-md">
                    <ImageCarousel images={data.media_gallery_entries} baseUrl={"https://pininos.zuwu.us/media/catalog/product"} />
                </div>
                <div className="mt-6">
                    <Description value={data.name} url={url} sku={data.sku} />
                    <Price value={data.price} />
                </div>
            </div>
            <AddToCart />
        </li>
    )
}
