import React from "react";

import styles from "../../styles/search.module.css";

function Search() {
  return (
    <div className={`${styles.search}`}>
      <div className="container">
        <form className={styles.search__form}>
          <input
            type="search"
            placeholder="Пошук товарів"
            className={styles.search__input}
          />
          <button className={styles.search__button}></button>
        </form>
      </div>
    </div>
  );
}

export default Search;
