import React, { useEffect, useState } from "react";
import "./style.css";

import * as requestAPI from "../../api/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PaymentCountdown from "../PaymentCountdown";

const PaymentConfirmation = (props) => {
  const i = [4, 5, 6, 7];
  const { index } = useSelector((state) => state.payment);
  // console.log(index);
  // bagaimana caranya looping menggunakan for loop disini?

  const [bankInfo, setBankInfo] = useState({
    name: null,
    desc: null,
    alias: null,
    no_rek: null,
    total_price: null,
  });
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  // console.log(bankInfo);

  const getData = async () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        access_token: token,
      },
    };
    const res = await requestAPI.getOrder(config, id);
    // console.log(res);
    setBankInfo({
      ...bankInfo,
      name: props.data[index].name,
      desc: props.data[index].desc,
      alias: props.data[index].alias,
      no_rek: props.data[index].no_rek,
      total_price: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(res.data.total_price),
    });
  };

  // const instruction = props.data[0].atm;
  // console.log(props.data[0].method_name);
  // const dataMethod = [];
  const method = props.data[index].method_name;
  console.log(method);

  return (
    <div className="payment-confirmation">
      <div className="grid-container">
        <div className="payment-countdown">
          <h5>Selesaikan Pembayaran Sebelum</h5>
          <h6>Hari, tanggal bulan jam waktu</h6>
          <div className="countdown">
            <PaymentCountdown />
          </div>
        </div>
        <div className="no-rek">
          <h5>Lakukan Transfer Ke</h5>
          <div className="information">
            <div className="info1">
              <h6>{bankInfo.name}</h6>
            </div>
            <div className="info2">
              <h6>{bankInfo.desc}</h6>
              <h6>{bankInfo.alias}</h6>
            </div>
          </div>
          <div className="number-information">
            <h6>Nomor Rekening</h6>
            <p>{bankInfo.no_rek}</p>
          </div>
          <div className="total-payment">
            <h6>Total Bayar</h6>
            <p>{bankInfo.total_price}</p>
          </div>
        </div>
        <div className="payment-instruction">
          <h5>Instruksi Pembayaran</h5>
          <div className="method-pay">
            {method.map((method) => (
              <div className="method">
                <h4>{method}</h4>
              </div>
            ))}
          </div>
          <div className="list">
            {props.data[index].atm.map(({ instruction }) => (
              <li>{instruction}</li>
            ))}
          </div>
        </div>
        <div className="confirmation">
          <h6>
            Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
          </h6>
          <button>Konfirmasi Pembayaran</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
