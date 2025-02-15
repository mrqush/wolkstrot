import React from "react";

import styles from "../../styles/about.module.css";
import about from "../../images/about.jpg";
import Title from "../Title/Title";

function About() {
  return (
    <>
      <Title title={'Про компанію'}/>
      <div className={`${styles.text__wrapper} container`}>
        <img src={about} alt="Наш головний офіс" className={styles.image}/>
        <p className={styles.text}>
          Торгова мережа Wolkstrot — одна з провідних українських роздрібних
          мереж за кількістю магазинів і обсягами продажу електроніки та
          побутової техніки. Бренд Wolkstrot активно розвивається як
          омніканальний (з представництвом як у фізичних магазинах, так і в
          онлайн просторі) і в 2023 році відзначає своє 29-річчя. Wolkstrot
          входить у топ-вибір покупців з 1998 року і є одним з лідерів у
          категорії магазинів побутової техніки за рівнем впізнаваності бренду,
          відвідуванням і кількістю покупок.
          <br />
          <br />
          Компанію Wolkstrot засновано в 1994 році. Тоді почалася діяльність з
          оптового продажу побутової техніки і електроніки. Розвиток роздрібної
          мережі почався в 1996 році з відкриття першого магазину техніки й
          електроніки у Харкові. У 1997 році з відкриттям супермаркету на вулиці
          Дегтярівській, 48, у Києві, бренд став офіційним роздрібним торговцем.
          У 2012 році Wolkstrot перейшов на омніканальну платформу управління
          бізнесом, яка поєднує онлайн і офлайн формати торгівлі.
          <br />
          <br />
          Торгова мережа Wolkstrot — єдиний український учасник Euronics,
          найбільшої закупівельної групи електроніки та побутової техніки, яка
          співпрацює з 35 країнами Європи.
        </p>
      </div>
    </>
  );
}

export default About;
