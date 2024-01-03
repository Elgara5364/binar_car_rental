import React from "react";
import "./style.css";
import backArrow from "../../assets/icon/fi_arrow-left.png";
import Rectangle from "../../assets/shape/Rectangle 36.png";
import { useNavigate } from "react-router-dom";

const PaymentStep = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="payment-step ">
      <div className="left-side">
        <img className="back" src={backArrow} alt="" onClick={handleBack} />
        <h6>Pembayaran</h6>
      </div>
      <div className="right-side">
        <div className="step-1">
          <h6 className="number">1</h6>
          <h6>Pilih Metode</h6>
          <img src={Rectangle} alt="" />
        </div>
        <div className="step-2">
          <h6 className="number">2</h6>
          <h6>Bayar</h6>
          <img src={Rectangle} alt="" />
        </div>
        <div className="step-3">
          <h6 className="number">3</h6>
          <h6>Tiket</h6>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
