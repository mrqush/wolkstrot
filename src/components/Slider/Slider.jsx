import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import styles from "../../styles/slider.module.css";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import banner4 from "../../images/banner4.png";
import banner5 from "../../images/banner5.png";
import banner6 from "../../images/banner6.png";
import "swiper/css/bundle";

function Slider() {
  return (
    <div className={styles.slider}>
      <div className={"container"}>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ pauseOnMouseEnter: true }}
          className={styles.swiper}
          loop={true}
          speed={500}
        >
          <SwiperSlide className={styles.slide}>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={banner4} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={banner5} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={banner6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
