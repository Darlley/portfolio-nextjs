interface ProductInterface {
    id: number;
    name: string;
    category: string;
    description: string;
    site: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
}

type ProductProps = {
    product: ProductInterface;
}

export const Product = ({ product }: ProductProps) => {
    return (
        <div className="md:opacity-80 md:hover:opacity-100 group h-full max-w-[195px] md:max-w-[200px] rounded-md overflow-hidden border hover:shadow-lg">
            <div className="relative w-full">
            <div className="flex flex-col items-center overflow-hidden h-52">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
            </div>
            <button className="absolute flex items-center justify-center p-2 bg-white rounded-full top-3 right-3 text-brand-500 hover:cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-xl rounded-full hover:bg-gray-50">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                </div>
            </button>
            </div>
            <div className="flex items-center justify-between p-4 md:items-start">
            <div className="flex flex-col">
                <div className="flex flex-col justify-between w-full md:flex-row">
                    <h3 className="font-bold text-md text-secundary-500">{product.name}</h3>
                    <span className="font-bold uppercase text-md text-primary-800">{product.price}</span>
                </div>
                <p className="text-sm font-normal text-primary-800 ">{product.description}</p>
            </div>
            </div>
            <div className="flex p-4">
            <a href={product.href} target="_blank" className="w-full p-2 text-center text-white transition-all duration-200 rounded-md bg-opacity-80 bg-primary-500 hover:bg-opacity-100">Ir para {product.site}</a>
            </div>
        </div>
    )
}