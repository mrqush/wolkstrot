import React from "react";

import styles from "../../styles/delivery.module.css";
import nova from '../../images/Nova_Poshta_2014_logo.svg';
import ukrposhta from '../../images/Ukrposhta-ua.svg';
import meest from '../../images/Meest_Corporation_logo.svg';

function Delivery({ setStep }) {
  return (
    <div className={`container ${styles.delivery}`}>
      <form className={styles.form}>
        <div className={styles.left}>
          <input type="text" placeholder="ПІБ" className={styles.input} required/>
          <input
            type="text"
            placeholder="Адреса доставки"
            className={styles.input}
            required
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            className={styles.input}
            required
          />
          <input type="email" placeholder="Email" className={styles.input} required/>
        </div>
        <div className={styles.right}>
          <label className={styles.label}>
            <input type="radio" name="post" />
            <img src={nova} alt="Нова пошта" className={styles.input__img}/>
          </label>
          <label className={styles.label}>
            <input type="radio" name="post" />
            <img src={ukrposhta} alt="Укрпошта" className={styles.input__img}/>
          </label>
          <label className={styles.label}>
            <input type="radio" name="post" />
            <img src={meest} alt="Міст пошта" className={styles.input__img}/>
          </label>
        </div>
      </form>
      <div className={styles.buttons__wrapper}>
        <button className={`${styles.button} ${styles.cancel}`} onClick={() => setStep(1)}>Назад</button>
        <button className={`${styles.button}`} onClick={() => setStep(3)}>Далі</button>
      </div>
    </div>
  );
}

export default Delivery;
