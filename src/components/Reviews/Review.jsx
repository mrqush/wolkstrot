import React from "react";

import styles from '../../styles/reviews.module.css';
import stars from "../../images/stars.svg";

function Review({ name, text, avatarSrc }) {
  return (
    <div className={styles.reviews__item}>
      <div className={styles.item__top}>
        <img src={avatarSrc} alt="" className={styles.avatar}/>
        <div className={styles.name}>{name}</div>
        <img src={stars} alt="" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Review;
