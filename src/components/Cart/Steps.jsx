import React, { useEffect } from 'react';

import styles from '../../styles/cart.module.css';

function Steps({ step = 1 }) {

  useEffect(() => {}, [step])
  return (
    <div className={styles.cart}>
        <div className={`${styles.wrapper} container`}>
          <div className={styles.steps}>
            <div
              className={`${styles.steps__item} ` + (step === 1 ? `${styles.steps__item_active}` : '')}
            >
              1. Кошик
            </div>
            <div className={`${styles.steps__item} ` + (step === 2 ? `${styles.steps__item_active}` : '')}>2. Доставка</div>
            <div className={`${styles.steps__item} ` + (step === 3 ? `${styles.steps__item_active}` : '')}>3. Оплата</div>
          </div>
        </div>
      </div>
  )
}

export default Steps