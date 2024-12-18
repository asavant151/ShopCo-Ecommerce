import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';
import product1 from "../../../public/assets/product-1.png";
import product2 from "../../../public/assets/product-2.png";
import product3 from "../../../public/assets/product-3.png";
import product4 from "../../../public/assets/product-4.png";

const Arrivals = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "T-shirt With Tape Details",
      link: "/product-details",
      rating: 4.5,
      price: 120,
      originalPrice: null,
      discount: null,
    },
    {
      id: 2,
      image: product2,
      name: "Skinny Fit Jeans",
      link: "/product-details",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: 20,
    },
    {
      id: 3,
      image: product3,
      name: "Checkered Shirt",
      link: "/product-details",
      rating: 4.5,
      price: 180,
      originalPrice: null,
      discount: null,
    },
    {
      id: 4,
      image: product4,
      name: "Sleeve Striped T-shirt",
      link: "/product-details",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: 30,
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-12 md:pt-16">
      <h2 className="font-['Merriweather'] text-black text-[32px] md:text-[48px] font-bold uppercase mb-8 md:mb-14 text-center">
        NEW ARRIVALS
      </h2>

      <div className="hidden md:grid grid-cols-4 items-center">
        {products.map((product) => (
          <div key={product.id}>
            <Link to={product.link}>
              <img src={product.image} alt="" />
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

      <div className="md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div>
                <Link to={product.link}>
                  <img src={product.image} alt="" />
                </Link>
                <Link to={product.link}>
                  <h5 className="text-black font-bold text-base capitalize mt-4">
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
                  <p className="font-normal text-xs text-black/60 ml-3">
                    <span className="text-black">{product.rating}/</span>5
                  </p>
                </div>
                <p className="text-black font-bold text-lg mt-2">
                  ${product.price}
                  {product.originalPrice && (
                    <span className="line-through text-black/40 ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-[#FF3333] bg-opacity-10 rounded-[62px] py-2 px-4 text-[#FF3333] font-medium text-xs block w-max mt-3">
                      -{product.discount}%
                    </span>
                  )}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-9">
        <button
          type="button"
          className="bg-white hover:bg-black border border-solid border-black/10 rounded-[62px] py-4 px-14 text-black hover:text-white transition-all duration-500 ease-in-out font-medium text-base md:w-auto w-full"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Arrivals;
