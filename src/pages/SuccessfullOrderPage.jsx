import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "../styles/successfullorder.module.css";
import success from "../images/success.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";

function SuccessfullOrderPage() {
  
  return (
    <div>
      <Header />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.title}>Замовлення прийнято</div>
        <img src={success} alt="Замовлення прийнято" className={styles.img} />
        <p className={styles.text}>Наш менеджер зв'яжеться з вами за вказаним вами номером телефону.</p>
        <Link to={ROUTES.HOME} className={styles.button}>На головну</Link>
      </div>
      <Footer absolute={true} />
    </div>
  );
}

export default SuccessfullOrderPage;
