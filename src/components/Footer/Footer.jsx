import React from "react";

import styles from "../../styles/footer.module.css";
import Logo from "../Logo/Logo";

function Footer({ absolute = false }) {
  return (
    <div className={`${styles.footer} ` + (absolute ? `${styles.pinned}` : '')}>
      <div className={`${styles.wrapper} container`}>
        <Logo />
        <div>© 2024 Wolkstrot Corporation. Всі права захищені.</div>
      </div>
    </div>
  );
}

export default Footer;
