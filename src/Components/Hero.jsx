import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import sliderImage1 from "/slider-1.jpg";
import sliderImage2 from "/slider-2.jpg";
import sliderImage3 from "/slider-3.jpg";
import sliderImage5 from "/slider-5.jpg";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="w-full h-[70vh]">
      <Swiper
        pagination={{ dynamicBullets: true }}
          autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {/* slider-1 */}
        <SwiperSlide className="relative w-full h-full">
          <img
            src={sliderImage1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex flex-col justify-center  text-white text-left p-4 w-11/12 mx-auto ">
            <h2 className=" text-4xl md:text-6xl font-bold">
              Welcome to PlantCare
            </h2>
            <p className=" mt-4 text-lg md:text-xl max-w-xl">
              Track, nurture, and grow your plants with ease.
            </p>
            <Link to={'/auth/register'}><button className="btn btn-secondary mt-5">Get Started</button></Link>
          </div>
        </SwiperSlide>

        {/* slider-2 */}
        <SwiperSlide className="relative w-full h-full">
          <img
            src={sliderImage2}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
         
          <div className="absolute inset-0 flex flex-col justify-center  text-white text-left p-4 w-11/12 mx-auto ">
            <h2 className=" text-4xl md:text-6xl font-bold">
              Never Forget to Water Again
            </h2>
            <p className=" mt-4 text-lg md:text-xl max-w-xl">
              Set reminders and track your plant care history
            </p>
            <Link to={'/auth/register'}><button className="btn btn-secondary mt-5">Get Started</button></Link>
          </div>
        </SwiperSlide>

        {/* slider-3 */}
        <SwiperSlide className="relative w-full h-full">
          <img
            src={sliderImage3}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        
          <div className="absolute inset-0 flex flex-col justify-center  text-white text-left p-4 w-11/12 mx-auto ">
            <h2 className=" text-4xl md:text-6xl font-bold">
              Expert Plant Care Made Simple
            </h2>
            <p className=" mt-4 text-lg md:text-xl max-w-xl">
              Personalized reminder and care guides
            </p>
            <Link to={'/auth/register'}><button className="btn btn-secondary mt-5">Get Started</button></Link>
          </div>
        </SwiperSlide>

        {/* slider-4 */}
        <SwiperSlide className="relative w-full h-full">
          <img
            src={sliderImage5}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center  text-white text-left p-4 w-11/12 mx-auto ">
            <h2 className=" text-4xl md:text-6xl font-bold">
              Grow Your Green Sanctuary
            </h2>
            <p className=" mt-4 text-lg md:text-xl max-w-xl">
              Set reminders and track your plant care history
            </p>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
