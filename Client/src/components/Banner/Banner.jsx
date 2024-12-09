import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-[#F2F0F1] py-16 md:py-24"
      style={{
        backgroundImage: "url(/assets/back_img.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="font-['Merriweather'] text-4xl md:text-[64px] leading-10 md:leading-[64px] font-bold text-black">
          FIND CLOTHES
          <br />
          THAT MATCHES
          <br />
          YOUR STYLE
        </h1>
        <p className="text-lg md:text-xl text-black/60 my-4 md:my-8">
          Browse through our diverse range of meticulously crafted garments,
          designed
          <br className="hidden md:inline" />
          to bring out your individuality and cater for your sense of style.
        </p>
        <button
          type="button"
          className="bg-black hover:bg-white border border-solid border-black/10 hover:text-black transition-all duration-500 ease-in-out rounded-[62px] py-4 px-14 text-white font-medium mb-6 md:mb-12 w-full md:w-auto"
        >
          Shop Now
        </button>
        <div className="flex flex-wrap justify-center md:justify-start space-x-8">
          <div className="border-r border-solid border-black/10 pr-8">
            <div className="text-3xl md:text-[40px] font-bold text-black mb-3">
              200+
            </div>
            <div className="text-sm md:text-base text-black/60">
              International Brands
            </div>
          </div>
          <div className="border-none md:border-r md:border-solid border-black/10 pr-0 md:pr-8">
            <div className="text-3xl md:text-[40px] font-bold text-black mb-3">
              2,000+
            </div>
            <div className="text-sm md:text-base text-black/60">
              High-Quality Products
            </div>
          </div>
          <div className="mt-3 md:mt-0">
            <div className="text-3xl md:text-[40px] font-bold text-black mb-3">
              30,000+
            </div>
            <div className="text-sm md:text-base text-black/60">
              Happy Customers
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src="/assets/banner_img.png"
            alt="Banner Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
