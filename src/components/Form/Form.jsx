import React from "react";

import styles from '../../styles/form.module.css';

function Form({placeholder, type, buttonImage = true, buttonText, setSent}) {
  return (
    <>
      <form className={styles.form} onSubmit={() => setSent(true)}>
        <input
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
        <button className={styles.button} styles={buttonImage ? {backgroundImage: "url('../images/search.svg')"} : {}}>{buttonText}</button>
      </form>
    </>
  );
}

export default Form;
