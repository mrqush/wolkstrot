import React from "react";

import styles from '../../styles/title.module.css';

function Title({ title }) {
  return (
    <div className={styles.background}>
      <div className={`${styles.wrapper} container`}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}

export default Title;
