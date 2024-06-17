import React, { useEffect } from "react";

import styles from "../../styles/cart.module.css";
import { items } from "../../redux/cart/cartSlice";
import { useSelector } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

function Cart({ setStep, total, setTotal }) {
  const itemsArray = useSelector(items);

  function calcSum(arr) {
    let sum = 0;
    for(let item of arr) {
      if(item.discountPrice !== null) {
        sum += item.discountPrice;
      } else {
        sum += item.price;
      }
    }
    return sum;
  }

  useEffect(() => {
    setTotal(calcSum(itemsArray))
  }, [itemsArray]);

  return (
    <>
      <div className={`${styles.wrapper2} container`}>
        <div className={styles.wrapper__left}>
          <div className={styles.title}>Кошик</div>
          <div className={styles.items}>
            {itemsArray?.map((item) => (
              <Item
                key={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                discountPrice={item.discountPrice}
                img={item.img}
                _id={item._id}
              />
            ))}
          </div>
          <div className={styles.buttons__wrapper}>
            <Link className={styles.button__cancel} to={ROUTES.HOME}>Відміна</Link>
            <button className={styles.button__checkout} onClick={() => setStep(2)}>Далі</button>
          </div>
        </div>
        <div className={styles.wrapper__right}>
          <div className={styles.title}>Замовлення</div>
          <div className={styles.summary__wrapper}>
            <div className={styles.summary__item}>
              <div className={styles.summary__item_1}>Товари</div>
              <div className={styles.summary__item_2}>₴{total}</div>
            </div>
            <div className={styles.summary__item}>
              <div className={styles.summary__item_1}>Доставка</div>
              <div className={styles.summary__item_2}>₴100</div>
            </div>
            <div className={styles.summary__item}>
              <div className={styles.summary__item_1}>Податок</div>
              <div className={styles.summary__item_2}>₴{total * 0.2}</div>
            </div>
            <div className={styles.summary__item}>
              <div
                className={styles.summary__item_1}
                style={{ fontWeight: "700" }}
              >
                Сума
              </div>
              <div className={styles.summary__item_2}>₴{total + 100 + total * 0.2}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
