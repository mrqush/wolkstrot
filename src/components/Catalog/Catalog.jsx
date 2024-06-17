import React, { useEffect, useState } from "react";
import Card from "../PreviewCatalog/Card";

import styles from "../../styles/catalog.module.css";
import loader from "../../images/loader.svg";
import axios from "axios";

function Catalog() {
  const [items, setItems] = useState();

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    axios.get("http://localhost:5000/catalog")
      .then((response) => response.data)
      .then((data) => {
        shuffleArray(data);
        setItems(data);
      })
      .catch((error) => console.error("Помилка запиту даних:", error));
  }, []);

  return (
    <div className={`${styles.catalog} container`}>
      <div className={styles.wrapper}>
        {items ? (
          items.map((item) => (
            <Card
              className={styles.card}
              key={item._id}
              name={item.name}
              img={item.imgSrc}
              description={item.description}
              price={item.price}
              discountPrice={item.discountPrice}
              _id={item._id}
            />
          ))
        ) : (
          <img src={loader} alt="loading" className={styles.loader} />
        )}
      </div>
    </div>
  );
}

export default Catalog;
