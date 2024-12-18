import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from 'swiper/modules';
import product9 from "../../../public/assets/product-9.png";
import product10 from "../../../public/assets/product-10.png";
import product11 from "../../../public/assets/product-11.png";
import product12 from "../../../public/assets/product-12.png";

const LikeProduct = () => {
    const products = [
        {
            id: 1,
            image: product9,
            name: "Polo with Contrast Trims",
            link: "/product-details",
            rating: 4.0,
            price: 212,
            originalPrice: 242,
            discount: 20,
        },
        {
            id: 2,
            image: product10,
            name: "Gradient Graphic T-shirt",
            link: "/product-details",
            rating: 3.5,
            price: 145,
            originalPrice: null,
            discount: null,
        },
        {
            id: 3,
            image: product11,
            name: "Polo with Tipping Details",
            link: "/product-details",
            rating: 4.5,
            price: 180,
            originalPrice: null,
            discount: null,
        },
        {
            id: 4,
            image: product12,
            name: "Black Striped T-shirt",
            link: "/product-details",
            rating: 5.0,
            price: 120,
            originalPrice: 150,
            discount: 30,
        },
    ];

    return (
        <div className="container mx-auto px-4 pt-12 pb-12 md:pt-16">
            <h2 className="font-['Merriweather'] text-black text-[32px] md:text-[48px] font-bold uppercase mb-8 md:mb-14 text-center">
                You might also like
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
        </div>
    );
}

export default LikeProduct