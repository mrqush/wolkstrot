import React from 'react';
import Title from '../Title/Title';

import styles from '../../styles/help.module.css';

function Help() {
  return (
    <>
        <Title title={'Допомога онлайн'}/>
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <input type="name" placeholder="Ім'я" className={styles.input}/>
                <input type="email" placeholder='Email' className={styles.input}/>
                <textarea type="text" placeholder='Ваше звернення' className={`${styles.input} ${styles.input__text}`}/>
                <input type="submit" className={styles.submit} value={'Надіслати'}/>
            </form>
        </div>
    </>
  )
}

export default Help;
