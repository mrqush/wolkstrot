import React from "react";

import styles from "../../styles/shipping.module.css";

function Shipping() {
  return (
    <div className={styles.shipping}>
      <div className={'container'} style={{ display: 'flex', justifyContent: 'center'}}>
        <div className={styles.text}>
          Безкоштовна доставка для замовлень від 1500₴
        </div>
      </div>
    </div>
  );
}

export default Shipping;
