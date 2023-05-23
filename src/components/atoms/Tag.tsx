type TagProps = {
    children: string
}

export const Tag = ({ children }: TagProps) => {
    return (
        // <button className="transition-colors flex items-center gap-1 bg-primary-500 rounded-full text-xs p-1 hover:bg-opacity-100 text-white">
        //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
        //         <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        //         <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
        //     </svg>
        //     {children}
        // </button>
        <button className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200 hover:bg-gray-200">
            <svg className="h-1.5 w-1.5 fill-secundary-500" viewBox="0 0 6 6" aria-hidden="true">
            <circle cx={3} cy={3} r={3} />
            </svg>
            {children}
        </button>
    )
}