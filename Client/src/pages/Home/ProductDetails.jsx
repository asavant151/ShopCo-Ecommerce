import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import TabsComponent from '../../components/TabsComponent/TabsComponent';

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('/assets/product-1-1.png');
  const [selectedSmallImage, setSelectedSmallImage] = useState(0);

  const colors = ['#4F4631', '#314F4A', '#31344F',];

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  const productImages = [
    '/assets/product-1-1.png',
    '/assets/product-1-2.png',
    '/assets/product-1-3.png',
  ];


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageChange = (image, index) => {
    setMainImage(image);
    setSelectedSmallImage(index);
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-12 md:pt-16">
        {/* Breadcrumbs */}
        <nav className="mb-4">
          <ol className="flex items-center text-base font-normal">
            <li>
              <a href="/" className="text-black/60 hover:text-black mr-1">Home</a>
            </li>
            <li className="text-black/60 mr-3"><FaChevronRight /></li>
            <li>
              <a href="/shop" className="text-black/60 hover:text-black mr-1">Shop</a>
            </li>
            <li className="text-black/60 mr-3"><FaChevronRight /></li>
            <li>
              <a href="/shop/men" className="text-black/60 hover:text-black mr-1">Men</a>
            </li>
            <li className="text-black/60 mr-3"><FaChevronRight /></li>
            <li className="text-black">T-shirts</li>
          </ol>
        </nav>
        <div className="flex md:flex-row flex-col p-4">
          {/* Left Side: Product Images */}
          <div className="md:w-1/2 flex md:flex-nowrap flex-wrap items-center">
            {/* Small Product Images */}
            <div className="flex md:flex-col md:order-1 order-2 md:mb-0 mb-8">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 p-1 cursor-pointer"
                  onClick={() => handleImageChange(image, index)}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className={`w-full h-auto ${selectedSmallImage === index ? 'border-2 border-black rounded-[20px]' : 'rounded-[20px]'}`}
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="mb-4 md:order-2 order-1">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-[444px] h-[530px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="font-['Merriweather'] text-black text-[32px] md:text-[48px] font-bold uppercase">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐</span>
              <span className="ml-2 font-normal text-base text-black/60"><span className='text-black'>4.5/</span>5</span>
            </div>
            <div className="flex items-center">
              <div className="text-[32px] font-bold mt-2">$260 <span className="text-[32px] font-bold text-black/30 line-through">$300</span></div>
              <span className="bg-[#FF3333] bg-opacity-10 rounded-[62px] py-2 px-4 text-[#FF3333] font-medium text-xs ml-3">
                -40%
              </span>
            </div>
            <p className="mt-4 text-black/60 border-b border-black/10 pb-4">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Selection */}
            <div className="mt-4">
              <span className="font-bold text-black/60">Select Colors</span>
              <div className="flex mt-2 border-b border-black/10 pb-4">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`relative w-8 h-8 rounded-full mr-2 cursor-pointer ${selectedColor === color ? '' : ''
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(color)}
                  >
                    {selectedColor === color && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        ✓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-4">
              <span className="font-bold text-black/60">Choose Size</span>
              <div className="flex mt-2 border-b border-black/10 pb-4">
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`border border-black/60 rounded-[62px] bg-[#F0F0F0] px-4 py-2 mr-2 cursor-pointer ${selectedSize === size ? 'bg-black text-white' : ''
                      }`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center rounded-[62px] bg-[#F0F0F0] mt-2 mr-5">
                <button
                  className="px-4 py-2 font-bold text-black text-lg"
                  onClick={() => handleQuantityChange('decrease')}
                >
                  -
                </button>
                <span className="px-4 py-2 mx-2 font-medium text-base text-black">{quantity}</span>
                <button
                  className="px-4 py-2 font-bold text-black text-lg"
                  onClick={() => handleQuantityChange('increase')}
                >
                  +
                </button>
              </div>
              {/* Add to Cart Button */}
              <button className="bg-black text-white font-medium text-base px-4 py-4 w-full rounded-[62px]">Add to Cart</button>
            </div>
          </div>
        </div>
        <TabsComponent />
      </div>
    </>
  );
}

export default ProductDetails