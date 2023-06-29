import React from "react";
import "./testimonials.css";
import { Data } from "./Data";

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="sectionTitle">Testimonial</h2>
      <span className="sectionSubtitle">My client says</span>

      <Swiper className="testimonialsContainer container mySwiper grid"
    loop={true}
    // grabCursor={true}
    spaceBetween={24}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    }}
    modules={[Pagination]}
      >
        {Data.map(({id, image, title, description}) => {
            return(
                <SwiperSlide key={id} className="testimonialCard">
                    <img src={image} alt="" className="testimonialImg" />

                    <h3 className="testimonialName">{title}</h3>
                    <p className="titleDescription">{description}</p>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
