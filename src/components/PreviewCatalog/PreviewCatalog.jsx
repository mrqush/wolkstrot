import React, { useEffect, useState } from "react";

import styles from "../../styles/previewcatalog.module.css";
import loader from "../../images/loader.svg";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

function PreviewCatalog({
  heading,
  description,
  color = "#000",
  discounted = false,
}) {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/catalog")
      .then((response) => response.json())
      .then((data) => {
        shuffleArray(data);
        setItems(data);
        setLoaded(true);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  useEffect(() => {
    if (items.length > 0 && discounted) {
      const filteredItems = items.filter((item) => item.discountPrice !== null);
      setItems(filteredItems);
    }
  }, [discounted, loaded]);

  return (
    <div className={`${styles.previewcatalog} container`}>
      <div className={styles.sectiontitle}>
        <div>
          <h3 className={styles.title} style={{ color: color }}>
            {heading}
          </h3>
          <p className={styles.subtitle}>{description}</p>
        </div>
        <Link to={ROUTES.CATALOG}
          className={styles.sectiontitle__button}
          style={{ color: color, borderColor: color }}
        >
          Всі товари
          <span className={styles.arrow}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-right">
                <path
                  id="Vector"
                  d="M3.75 9.5H14.25"
                  stroke={color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill={color}
                />
                <path
                  id="Vector_2"
                  d="M9 4.25L14.25 9.5L9 14.75"
                  stroke={color}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <Swiper
          className={styles.swiper}
          spaceBetween={8}
          slidesPerView={"auto"}
        >
          {items ? (
            items.map((item) => (
              <SwiperSlide className={styles.slide} key={item._id}>
                <Card
                  className={styles.card}
                  key={item._id}
                  name={item.name}
                  img={item.imgSrc}
                  description={item.description}
                  price={item.price}
                  discountPrice={item.discountPrice}
                />
              </SwiperSlide>
            ))
          ) : (
            <img src={loader} alt="loading" className={styles.loader} />
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default PreviewCatalog;
