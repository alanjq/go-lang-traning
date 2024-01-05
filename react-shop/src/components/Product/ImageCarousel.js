import { useEffect, useState } from "react"

export default function ImageCarousel({ baseUrl, images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    if (!Array.isArray(images) || Array.isArray(images).length === 0) {
        return null
    }

    useEffect(() => {
        if (Array.isArray(images) && images.length > 0) {
            setCurrentIndex(0)
        }
    }, [images])

    const nextImage = () => {
        if (currentIndex + 1 > images.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(images.length - 1)
        }
    }
    // h-full w-full object-cover object-center group-hover:opacity-75

    return <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-64">
            {images.map((image, key) =>
                <div key={key} className={`duration-700 ease-in-out ${key === currentIndex ? '' : 'hidden'}`} data-carousel-item>
                    <img src={`${baseUrl}${image.file}`} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image.label || ""} />
                </div>
            )}
        </div>
        {/* <!-- Slider indicators --> */}
        {images.length > 1 &&
            <>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((image, index) =>
                        <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={currentIndex == index ? "true" : "false"} aria-label={`Slide ${index}`} data-carousel-slide-to={index}></button>
                    )}
                </div>
                <button onClick={prevImage} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-400/30 dark:bg-gray-800/30 group-hover:bg-gray-800/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button onClick={nextImage} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-400/30 dark:bg-gray-800/30 group-hover:bg-gray-800/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </>
        }
    </div>
}