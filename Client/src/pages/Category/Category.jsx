import React, { useState } from 'react'
import { FaChevronRight, FaFilter } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import product1 from "../../../public/assets/product-1.png";
import product2 from "../../../public/assets/product-2.png";
import product3 from "../../../public/assets/product-3.png";
import product4 from "../../../public/assets/product-4.png";

const Category = () => {
    const [filters, setFilters] = useState({
        category: '',
        priceRange: [0, 500], // Default price range
        colors: [],
        sizes: [],
        sortBy: 'Most Popular'
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const productsPerPage = 6;

    const products = [
        // Add your product data here
        { id: 1, name: 'Gradient Graphic T-shirt', price: 145, category: 'T-shirts', size: 'Medium', color: 'Red', dressStyle: 'Casual', image: product1, link: "/product-details", rating: 3.5, originalPrice: null, discount: null, },
        { id: 2, name: 'Polo with Tipping Details', price: 180, category: 'Shirts', size: 'Large', color: 'Blue', dressStyle: 'Formal', image: product2, link: "/product-details", rating: 4.5, originalPrice: null, discount: null, },
        { id: 3, name: 'Black Striped T-shirt', price: 120, category: 'T-shirts', size: 'Small', color: 'Black', dressStyle: 'Casual', image: product3, link: "/product-details", rating: 5.0, originalPrice: 150, discount: 30, },
        { id: 4, name: 'Skinny Fit Jeans', price: 240, category: 'Shorts', size: 'Large', color: 'Blue', dressStyle: 'Casual', image: product4, link: "/product-details", rating: 3.5, originalPrice: 260, discount: 20, },
        { id: 5, name: 'Checkered Shirt', price: 180, category: 'Shirts', size: 'Medium', color: 'Green', dressStyle: 'Formal', image: product1, link: "/product-details", rating: 4.5, originalPrice: null, discount: null, },
        { id: 6, name: 'Sleeve Striped T-shirt', price: 130, category: 'T-shirts', size: 'Small', color: 'White', dressStyle: 'Casual', image: product2, link: "/product-details", rating: 4.5, originalPrice: 160, discount: 30, },
        { id: 7, name: 'Vertical Striped Shirt', price: 212, category: 'Shirts', size: 'Large', color: 'Red', dressStyle: 'Party', image: product3, link: "/product-details", rating: 5.0, originalPrice: 232, discount: 20, },
        { id: 8, name: 'Courage Graphic T-shirt', price: 145, category: 'T-shirts', size: 'Medium', color: 'Black', dressStyle: 'Casual', image: product4, link: "/product-details", rating: 4.0, originalPrice: null, discount: null, },
        { id: 9, name: 'Leose Fit Bermuda Shorts', price: 80, category: 'Shorts', size: 'Small', color: 'Blue', dressStyle: 'Casual', image: product1, link: "/product-details", rating: 3.5, originalPrice: null, discount: null, }
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        setCurrentPage(1); // Reset to first page when filters change
    };

    const handlePriceRangeChange = (values) => {
        setFilters({ ...filters, priceRange: values });
        setCurrentPage(1);
    };

    const handleColorChange = (color) => {
        const updatedColors = filters.colors.includes(color)
            ? filters.colors.filter(c => c !== color)
            : [...filters.colors, color];
        setFilters({ ...filters, colors: updatedColors });
        setCurrentPage(1);
    };

    const handleSizeChange = (size) => {
        const updatedSizes = filters.sizes.includes(size)
            ? filters.sizes.filter(s => s !== size)
            : [...filters.sizes, size];
        setFilters({ ...filters, sizes: updatedSizes });
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        const { value } = e.target;
        setFilters({ ...filters, sortBy: value });
        setCurrentPage(1);
    };

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const filteredProducts = products.filter(product => {
        return (
            (filters.category === '' || product.category === filters.category) &&
            (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]) &&
            (filters.colors.length === 0 || filters.colors.includes(product.color)) &&
            (filters.sizes.length === 0 || filters.sizes.includes(product.size))
        );
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (filters.sortBy === 'Low to High') {
            return a.price - b.price;
        } else if (filters.sortBy === 'High to Low') {
            return b.price - a.price;
        } else if (filters.sortBy === 'Most Popular') {
            // Add your popularity logic here (e.g., based on ratings or sales)
            return 0; // Default sorting
        }
        return 0;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => paginate(i)}
                    className={`px-4 py-2 mr-3 font-medium text-sm ${currentPage === i ? 'text-black' : 'text-black/60'}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="container mx-auto px-4 pt-12 md:pt-40 relative">
            <nav className="mb-4">
                <ol className="flex items-center text-base font-normal">
                    <li>
                        <Link to="/" className="text-black/60 hover:text-black mr-3">Home</Link>
                    </li>
                    <li className="text-black/60 mr-3"><FaChevronRight /></li>
                    <li>
                        <Link to="/shop/casual" className="text-black">Casual</Link>
                    </li>
                </ol>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Section */}
                <div className={`w-full lg:w-1/4 ${isFilterVisible ? 'fixed inset-0 bg-white z-50 p-4 overflow-y-auto lg:static lg:bg-transparent' : 'hidden lg:block'}`}>
                <h2 className="text-xl font-bold text-black mb-4">Filters</h2>
                    <div className="flex justify-between items-center mb-4 lg:hidden">
                        <h2 className="text-xl font-bold text-black">Filters</h2>
                        <button onClick={toggleFilterVisibility} className="text-xl">
                            &times;
                        </button>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <select name="category" onChange={handleFilterChange} className="w-full p-2 border rounded">
                                <option value="">All</option>
                                <option value="T-shirts">T-shirts</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Shirts">Shirts</option>
                                <option value="Hoodies">Hoodies</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xl font-bold mb-2">Price</label>
                            <input
                                type="range"
                                min="0"
                                max="500"
                                value={filters.priceRange[0]}
                                onChange={(e) => handlePriceRangeChange([parseInt(e.target.value), filters.priceRange[1]])}
                                className="w-full"
                            />
                            <input
                                type="range"
                                min="0"
                                max="500"
                                value={filters.priceRange[1]}
                                onChange={(e) => handlePriceRangeChange([filters.priceRange[0], parseInt(e.target.value)])}
                                className="w-full"
                            />
                            <div className="flex justify-between text-sm">
                                <span>${filters.priceRange[0]}</span>
                                <span>${filters.priceRange[1]}</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xl font-bold mb-2">Colors</label>
                            <div className="flex flex-wrap gap-2">
                                {['Red', 'Blue', 'Black', 'Green', 'White'].map(color => (
                                    <button
                                        key={color}
                                        onClick={() => handleColorChange(color)}
                                        className={`px-4 py-2 border rounded ${filters.colors.includes(color) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-xl font-bold mb-2">Sizes</label>
                            <div className="flex flex-wrap gap-2">
                                {['Small', 'Medium', 'Large'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => handleSizeChange(size)}
                                        className={`px-4 py-2 border rounded ${filters.sizes.includes(size) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort by dropdown for mobile */}
                        <div className="lg:hidden">
                            <label className="block text-xl font-bold mb-2">Sort by:</label>
                            <select name="sortBy" onChange={handleSortChange} className="w-full p-2 border rounded">
                                <option value="Most Popular">Most Popular</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="w-full lg:w-3/4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className='font-bold md:text-[32px] text-[24px] md:block hidden'>Casual</h2>
                        <div className="flex gap-8 items-center justify-between">
                            <h2 className='font-bold md:text-[32px] text-[24px] md:hidden block'>Casual</h2>
                            <h2 className="md:text-base text-sm font-normal text-black/60">
                                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} Products
                            </h2>
                            <div>
                                <button onClick={toggleFilterVisibility} className="lg:hidden">
                                    <FaFilter className="text-xl" />
                                </button>
                                <div className="hidden lg:block">
                                    <label className="text-sm font-medium text-black/60">Sort by:</label>
                                    <select name="sortBy" onChange={handleSortChange} className="focus:outline-none">
                                        <option value="Most Popular" className='text-black text-base font-medium'>Most Popular</option>
                                        <option value="Low to High" className='text-black text-base font-medium'>Low to High</option>
                                        <option value="High to Low" className='text-black text-base font-medium'>High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProducts.map((product) => (
                            <div key={product.id}>
                                <Link to={product.link}>
                                    <img src={product.image} alt="" className='w-full' />
                                </Link>
                                <Link to={product.link}>
                                    <h5 className="text-black font-bold text-xl capitalize mt-4">
                                        {product.name}
                                    </h5>
                                </Link>
                                <div className="flex items-center mt-3">
                                    {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                                        <img key={i} src="/assets/star.svg" alt="" />
                                    ))}
                                    {product.rating % 1 !== 0 && (
                                        <img src="/assets/half-star.svg" alt="" />
                                    )}
                                    <p className="font-normal text-sm text-black/60 ml-3">
                                        <span className="text-black">{product.rating}/</span>5
                                    </p>
                                </div>
                                <p className="text-black font-bold text-2xl mt-2">
                                    ${product.price}
                                    {product.originalPrice && (
                                        <span className="line-through text-black/40 ml-3">
                                            ${product.originalPrice}
                                        </span>
                                    )}
                                    {product.discount && (
                                        <span className="bg-[#FF3333] bg-opacity-10 rounded-[62px] py-2 px-4 text-[#FF3333] font-medium text-xs ml-3">
                                            -{product.discount}%
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-12 mb-20 gap-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 disabled:opacity-50 flex items-center font-medium text-sm"
                        >
                            <FaArrowLeftLong className='mr-2' /> Previous
                        </button>
                        <span className='flex items-center'>{renderPageNumbers()}</span>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 disabled:opacity-50 flex items-center font-medium text-sm"
                        >
                            Next
                            <FaArrowRightLong className='ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category