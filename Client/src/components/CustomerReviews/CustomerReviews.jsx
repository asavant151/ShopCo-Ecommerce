import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const CustomerReviews = () => {
  const reviews = [
    {
      rating: 3,
      name: "Sarah M.",
      review:
        "I’m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
    },
    {
      rating: 4,
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 4,
      name: "James L.",
      review:
        "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      rating: 2,
      name: "Moor",
      review: "As so! What is wrong? I want to do this with it!",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:mt-20 mt-12">
      <div className="flex items-center justify-between relative">
        <h2 className="font-['Merriweather'] text-black text-[32px] md:text-[48px] font-bold uppercase mb-8 md:mb-14">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center space-x-4">
          <div className="swiper-button-prev !text-black text-2xl !relative cursor-pointer mr-4">
            ←
          </div>
          <div className="swiper-button-next !text-black text-2xl !relative cursor-pointer">
            →
          </div>
        </div>
      </div>


      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        loop={true}
        // autoplay={{ delay: 2500 }}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-4">
                <p className="text-black font-bold text-xl mr-1">{review.name}</p>
                <img src="/assets/right-tick.svg" alt="" />
              </div>
              <p className="text-black/60 font-normal text-base mb-4">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;