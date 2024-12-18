import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Category = () => {
    return (
        <div className="container mx-auto px-4 pt-12 md:pt-16">{/* Breadcrumbs */}
            <nav className="mb-4">
                <ol className="flex items-center text-base font-normal">
                    <li>
                        <a href="/" className="text-black/60 hover:text-black mr-3">Home</a>
                    </li>
                    <li className="text-black/60 mr-3"><FaChevronRight /></li>
                    <li>
                        <a href="/shop/casual" className="text-black">Casual</a>
                    </li>
                </ol>
            </nav></div>
    )
}

export default Category