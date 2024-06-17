import React from "react";

import styles from "../../styles/previewcatalog.module.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";

function Card({ name, description, price, discountPrice, img, _id }) {
  const dispatch = useDispatch();
  const discount = Math.round(100 - (discountPrice / price) * 100);
  const handleClick = (event) => {
    event.currentTarget.classList.add("bg-salmon");
    event.currentTarget.innerHTML = "Додано до кошику";
    dispatch(addItem({
      name,
      description,
      price,
      discountPrice,
      img,
      _id,
    }))
  };

  return (
    <div className={styles.card}>
      <div style={{ padding: "10px" }}>
        <img src={img} alt="Фото товару" className={styles.img} />
      </div>
      <div className={styles.card__bottom}>
        <Link className={styles.name}>{name}</Link>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.price}>
          ₴{discountPrice ? discountPrice : price}
          {discountPrice ? (
            <div className={styles.discout__price}>
              <div className={styles.price__old}>₴{price} </div>
              <span>(-{discount}%)</span>
            </div>
          ) : null}
        </div>
        <button className={styles.card__buy} onClick={handleClick}>
          В кошик
        </button>
      </div>
    </div>
  );
}

export default Card;
