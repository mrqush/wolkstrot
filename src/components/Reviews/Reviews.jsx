import React from "react";

import styles from "../../styles/reviews.module.css";
import Review from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import avatar1 from '../../images/avatar1.jpg';
import avatar2 from '../../images/avatar2.jpg';
import avatar3 from '../../images/avatar3.jpg';
import avatar4 from '../../images/avatar4.jpg';
import avatar5 from '../../images/avatar5.jpg';

function Reviews() {
  return (
    <div className={`${styles.reviews} container`}>
      <h3 className={styles.title}>Відгуки наших клієнтів</h3>
      <div className={styles.reviews__list}>
        <Swiper
          className={styles.swiper}
          spaceBetween={8}
          slidesPerView={"auto"}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className={styles.slide}>
            <Review
              name={"Віталій Б."}
              text={
                "Відмінний вибір товарів, швидка доставка, перевершив очікування!"
              }
              avatarSrc={avatar1}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Review
              name={"Аліна О."}
              text={"Зручний інтерфейс, проста навігація, замовляю вже вдруге."}
              avatarSrc={avatar4}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Review
              name={"Олег Л."}
              text={"Надійна упаковка, все прийшло цілим і вчасно."}
              avatarSrc={avatar2}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Review
              name={"Дмитро Д."}
              text={"Надійна упаковка, все прийшло цілим і вчасно."}
              avatarSrc={avatar3}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <Review
              name={"Арина М."}
              text={"Надійна упаковка, все прийшло цілим і вчасно."}
              avatarSrc={avatar5}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
