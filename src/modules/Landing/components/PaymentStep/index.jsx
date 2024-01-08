import React from "react";
import "./style.css";
import backArrow from "../../assets/icon/fi_arrow-left.png";
import Rectangle from "../../assets/shape/Rectangle 36.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PaymentStep = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const state = useSelector((state) => state.payment);
  console.log(state);

  return (
    <div className="payment-step mx-auto">
      <div className="container">
        <div className="left-side">
          <img className="back" src={backArrow} alt="" onClick={handleBack} />
          <h6>Pembayaran</h6>
        </div>
        <div className="right-side">
          <div className="step-1">
            <h6 className="number complete">1</h6>
            <h6>Pilih Metode</h6>
            <img src={Rectangle} alt="" />
          </div>
          <div className="step-2">
            <h6
              className={
                state.step === 2 || state.step === 3
                  ? "number complete"
                  : "number"
              }>
              2
            </h6>
            <h6>Bayar</h6>
            <img src={Rectangle} alt="" />
          </div>
          <div className="step-3">
            <h6 className={state.step === 3 ? "number complete" : "number"}>
              3
            </h6>
            <h6>Tiket</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
