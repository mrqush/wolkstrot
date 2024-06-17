import React from "react";

import styles from "../../styles/cart.module.css";
import bin from "../../images/trash.svg";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cart/cartSlice";

function Item({ name, description, price, discountPrice, img, _id }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.img__wrapper}>
        <img src={img} alt="Фото товару" />
      </div>
      <div className={styles.item__wrapper}>
        {discountPrice ? (
          <>
            <div className={styles.price}>₴{discountPrice}</div>
            <div className={styles.price_old}>₴{price}</div>
          </>
        ) : (
          <>
            <div className={styles.price} style={{ color: '#000' }}>₴{price}</div>
          </>
        )}
        <div className={styles.item__name}>{name}</div>
        <p className={styles.item__description}>{description}</p>
      </div>
      <div className={styles.item__wrapper2}>
        <div className={styles.item__quantity}>Quantity: 1</div>
        <button className={styles.quantity__button} onClick={() => dispatch(deleteItem(_id))}>
          <img src={bin} alt="Видалити" />
        </button>
      </div>
    </div>
  );
}

export default Item;
