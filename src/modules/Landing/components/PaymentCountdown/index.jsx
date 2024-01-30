import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import "./style.css";

// timenya di props aja agar componentnya reusable
const PaymentCountdown = () => {
  const renderer = ({ formatted: { hours, minutes, seconds }, completed }) => {
    if (completed) {
      // Render a completed state
      return "waktu habis";
    } else {
      // Render a countdown
      return (
        <div>
          <h4>{hours}</h4> :<h4>{minutes}</h4>:<h4>{seconds}</h4>
        </div>
      );
    }
  };
  return (
    <div className="p-countdown">
      <Countdown
        date={Date.now() + 86399000} // time yg di props akan masuk kesini
        renderer={renderer}
        zeroPadTime={2}
      />
    </div>
  );
};

export default PaymentCountdown;
