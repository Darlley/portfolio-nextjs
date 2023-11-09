import HeaderPage from "@/components/molecules/HeaderPage"
import Metadata from "@/components/molecules/Metadata"
import { Product } from "@/components/molecules/products/Product";
import { products } from "../../products.json";

const metadata = {
  title: "Darlley Brito - Produtos",
  description: "Nesta página, estarão listados produtos que uso com link meus links de afiliado da Shopee.",
  image: "https://darlley.github.io/images/header.jpg"
}

const filters = {
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductsPage() {
  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <h1>SHOPPING</h1>
      </HeaderPage>
      {/*FILTER*/}
      {/* <div className="bg-white">
        
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center border-t border-b border-gray-200"
        >
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>
          <div className="relative col-start-1 row-start-1 py-4">
            <div className="flex px-4 mx-auto space-x-6 text-sm divide-x divide-gray-200 max-w-7xl sm:px-6 lg:px-8">
              <div>
                <Disclosure.Button className="flex items-center font-medium text-gray-700 group">
                  <FunnelIcon
                    className="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  2 Filters
                </Disclosure.Button>
              </div>
              <div className="pl-6">
                <button type="button" className="text-gray-500">
                  Clear all
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="py-10 border-t border-gray-200">
            <div className="grid grid-cols-2 px-4 mx-auto text-sm max-w-7xl gap-x-4 sm:px-6 md:gap-x-6 lg:px-8">
              <div className="grid grid-cols-1 auto-rows-min gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Price</legend>
                  <div className="pt-6 space-y-6 sm:space-y-4 sm:pt-4">
                    {filters.price.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`price-${optionIdx}`}
                          name="price[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="flex-shrink-0 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`price-${optionIdx}`} className="flex-1 min-w-0 ml-3 text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-medium">Color</legend>
                  <div className="pt-6 space-y-6 sm:space-y-4 sm:pt-4">
                    {filters.color.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`color-${optionIdx}`}
                          name="color[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="flex-shrink-0 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`color-${optionIdx}`} className="flex-1 min-w-0 ml-3 text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="grid grid-cols-1 auto-rows-min gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Size</legend>
                  <div className="pt-6 space-y-6 sm:space-y-4 sm:pt-4">
                    {filters.size.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`size-${optionIdx}`}
                          name="size[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="flex-shrink-0 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`size-${optionIdx}`} className="flex-1 min-w-0 ml-3 text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-medium">Category</legend>
                  <div className="pt-6 space-y-6 sm:space-y-4 sm:pt-4">
                    {filters.category.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`category-${optionIdx}`}
                          name="category[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="flex-shrink-0 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`category-${optionIdx}`} className="flex-1 min-w-0 ml-3 text-gray-600">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </Disclosure.Panel>
          <div className="col-start-1 row-start-1 py-4">
            <div className="flex justify-end px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <Menu as="div" className="relative inline-block">
                <div className="flex">
                  <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Disclosure>
      </div> */}

      <main className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mt-6 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
