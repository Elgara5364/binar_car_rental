import React from "react";
import "./style.css";
import backArrow from "../../assets/icon/fi_arrow-left.png";
import Rectangle from "../../assets/shape/Rectangle 36.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { disableButton } from "../../features/detail/detailSlice";
import {
  delBankSelection,
  delSelectedBank,
  delStep,
  addStep,
} from "../../features/payment/paymentSlice";

const PaymentStep = (props) => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.payment);
  console.log(state);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(disableButton());
    dispatch(delSelectedBank());
    dispatch(delStep());
    if (state.step <= 1) {
      dispatch(addStep());
      dispatch(delBankSelection());
      navigate(-1);
    }
  };

  return (
    <div className="payment-step mx-auto">
      <div className={state.step == 1 ? "container" : "less-height-container"}>
        <div className="left-side">
          <img className="back" src={backArrow} alt="" onClick={handleBack} />
          {state.step == 1 ? <h6>Pembayaran</h6> : <h6>{props.data.name}</h6>}
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
