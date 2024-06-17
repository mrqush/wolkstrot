import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";

import "../styles/global.css";
import Search from "../components/Search/Search"
import PreviewCatalog from "../components/PreviewCatalog/PreviewCatalog";
import Shipping from "../components/Shipping/Shipping";
import Reviews from "../components/Reviews/Reviews";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <main>
        <Slider />
        <Search />
        <PreviewCatalog
          heading="Нові надходження"
          description="Перегляньте найновіші товари"
        />
        <PreviewCatalog
          heading="Вигідна пропозиція"
          description="Найбільші знижки"
          color="#FF6C6C"
          discounted={true}
        />
        <Shipping />
        <Reviews />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage
