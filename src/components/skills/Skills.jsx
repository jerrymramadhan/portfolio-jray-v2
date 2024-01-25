import React from "react";
import "./skills.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Skills = () => {
    return ( 
        <section className="skills container section" id="skills">
            <h2 className="section__title">My Skills</h2>
            <span className="section__subtitle">Tech Stack</span>

            <Swiper className="skills__container"
            loop={true}
            grabCursor={true}
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
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="skills__card" key={id}>
                            <img src={image} alt="" className="skills__img" />

                            <h3 className="skills__name">{title}</h3>
                            <p className="skills__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Skills