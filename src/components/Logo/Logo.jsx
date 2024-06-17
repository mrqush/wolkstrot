import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/logo.module.css';
import logo from "../../images/logo.svg";

function Logo() {
  return (
    <>
    <Link to={ROUTES.HOME} className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>
    </>
  )
}

export default Logo