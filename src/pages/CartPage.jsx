import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { items } from "../redux/cart/cartSlice";
import styles from "../styles/cart.module.css";
import emptyCart from "../images/empty-cart.svg";
import Steps from "../components/Cart/Steps";
import Delivery from "../components/Cart/Delivery";
import Payment from "../components/Cart/Payment";

function CartPage() {
  const itemsArray = useSelector(items);
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {}, [step]);
  return (
    <div>
      <Header />
      <Steps step={step} />
      {itemsArray?.length < 1 && (
        <div className={`${styles.empty} container`}>
          Кошик порожній
          <img src={emptyCart} alt="Cart" />
        </div>
      )}
      {itemsArray?.length > 0 && step === 1 ? <Cart setStep={setStep} total={total} setTotal={setTotal}/> : null}
      {step === 2 && <Delivery setStep={setStep}/>}
      {step === 3 && <Payment total={total} setStep={setStep}/>}
      <Footer absolute={true}/>
    </div>
  );
}

export default CartPage;
