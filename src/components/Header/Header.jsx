import React from "react";

import styles from "../../styles/header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useSelector } from "react-redux";
import { itemsCount } from "../../redux/cart/cartSlice";

import cart from "../../images/cart.svg";
import Logo from "../Logo/Logo";

function Header() {
  const count = useSelector(itemsCount);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} container`}>
        <Logo />
        <div className={styles.header__inner}>
          <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
              <li className={styles.list__element}>
                <Link to={ROUTES.ABOUT}>Про нас</Link>
              </li>
              <li className={styles.list__element}>
                <Link to={ROUTES.CATALOG}>Каталог</Link>
              </li>
              <li className={styles.list__element}>
                <Link to={ROUTES.HELP}>Допомога</Link>
              </li>
            </ul>
          </nav>
          <Link to={ROUTES.CART} className={styles.cart}>
            <div
              className={styles.cart__logo}
              style={{ backgroundImage: `url(${cart})` }}
            ></div>
            Кошик
            <span className={styles.cart__count}>
              &nbsp;{count > 0 ? `(${count})` : ""}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
