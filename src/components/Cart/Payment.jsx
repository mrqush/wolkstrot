import React, { useState } from "react";

import styles from "../../styles/payment.module.css";
import visa from "../../images/visa-classic.svg";
import mastercard from "../../images/mastercard-old.svg";
import card from "../../images/cheque-payment.svg";
import btc from "../../images/bitcoin.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cartSlice";

function Payment({ total, setStep }) {
  const [cardSelected, setCardSelected] = useState(false);
  const [btcSelected, setBtcSelected] = useState(false);
  const dispatch = useDispatch();

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'card') {
      setCardSelected(true);
    } else {
      setCardSelected(false);
    }

    if (selectedValue === 'btc') {
      setBtcSelected(true);
    } else {
      setBtcSelected(false);
    }
  }

  return (
    <div className={`container ${styles.payment}`}>
    <div className={styles.total__text}>
      До сплати: ₴{total}
    </div>
      <form>
      Оберіть спосіб оплати:
        <div className={styles.wrapper}>
          <label className={styles.label}>
            <input type="radio" name="payment" value="card" onChange={(e) => handleOptionChange(e)} required/>
            <div className={styles.card__img}>
              <img src={visa} alt="" className={styles.input__img} />
              <img src={mastercard} alt="" className={styles.input__img} />
              <img src={card} alt="" className={styles.input__img} />
              <img src={btc} alt="" className={styles.input__img} />
            </div>
          </label>
          {cardSelected && (
            <form className={styles.form__card}>
              <input
                type="number"
                placeholder="Номер картки"
                className={styles.input}
              />
              <input
                type="number"
                placeholder="MM/YY"
                className={styles.input}
              />
              <input type="number" placeholder="CVV" className={styles.input} />
            </form>
          )}
          <label className={styles.label}>
            <input type="radio" name="payment" value="btc" onChange={(e) => handleOptionChange(e)} required/>
            <div className={styles.card__img}>
              <img src={btc} alt="Біткоїн" className={styles.input__img} />
            </div>
          </label>
          {btcSelected && (
            <div className={styles.btc__wrapper}>
              Надішліть {(total / 2415300).toFixed(6)} BTC на цю адресу: <br />
              bc1qxvssfgt2jnztts2hw3t43wm2zrwtkdh7qwsph0
            </div>
          )
          }
          <label className={styles.label}>
            <input type="radio" name="payment" value="cash" onChange={(e) => handleOptionChange(e)} required/>
            <div>Готівка</div>
          </label>
        </div>
      </form>
      <div className={styles.buttons__wrapper}>
        <button className={`${styles.button} ${styles.cancel}`} onClick={() => setStep(2)}>Назад</button>
        <Link to={ROUTES.SUCCESS} className={`${styles.button}`} onClick={() => dispatch(clearCart())}>Завершити замовлення</Link>
      </div>
    </div>
  );
}

export default Payment;
