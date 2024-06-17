import React, { useState } from "react";
import Form from "../Form/Form";

import styles from "../../styles/newsletter.module.css";

function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <div className={styles.newsletter}>
      <div className={`${styles.wrapper} container`}>
        <h4 className={styles.title}>
          Будьте в курсі
          <br /> останніх тенденцій та пропозицій!
        </h4>
        {sent ? (
          <div>Дякуємо за підписку</div>
        ) : (
          <Form
            placeholder="Email адреса"
            type="email"
            buttonImage={false}
            buttonText="Підписатись"
            setSent={setSent}
          />
        )}
      </div>
    </div>
  );
}

export default Newsletter;
