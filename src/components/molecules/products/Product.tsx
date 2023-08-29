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
        <div key={product.id} className="relative group">
            <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center w-full" />
                <div className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                        Ir para {product.site}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                    <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h3>
                <p>{product.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
    )
}