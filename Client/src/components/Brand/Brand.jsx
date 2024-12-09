import React from "react";
import brand1 from "../../../public/assets/brand-1.svg";
import brand2 from "../../../public/assets/brand-2.svg";
import brand3 from "../../../public/assets/brand-3.svg";
import brand4 from "../../../public/assets/brand-4.svg";
import brand5 from "../../../public/assets/brand-5.svg";
import brandmb1 from "../../../public/assets/brand-mb-1.svg";
import brandmb2 from "../../../public/assets/brand-mb-2.svg";
import brandmb3 from "../../../public/assets/brand-mb-3.svg";
import brandmb4 from "../../../public/assets/brand-mb-4.svg";
import brandmb5 from "../../../public/assets/brand-mb-5.svg";
const Brand = () => {
  const brands = [
    {
      img: brand1,
    },
    {
      img: brand2,
    },
    {
      img: brand3,
    },
    {
      img: brand4,
    },
    {
      img: brand5,
    },
  ];

  const brands2 = [
    {
      img: brandmb1,
    },
    {
      img: brandmb2,
    },
    {
      img: brandmb3,
    },
    {
      img: brandmb4,
    },
    {
      img: brandmb5,
    },
  ];
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-9 md:py-11">
        <div className="md:flex items-center justify-between flex-wrap hidden">
          {brands.map((item, index) => (
            <img src={item.img} alt="" key={index} className="mr-7 md:mr-24" />
          ))}
        </div>
        <div className="md:hidden flex items-center justify-center flex-wrap">
          {brands2.map((item, index) => (
            <img
            src={item.img}
            alt=""
            key={index}
            className={`mr-8 ${index < brands2.length - 1 ? "mb-5" : ""}`}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
