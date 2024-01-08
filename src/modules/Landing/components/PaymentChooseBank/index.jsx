import React, { useEffect, useState } from "react";
import "./style.css";
import rectangle27 from "../../assets/shape/Rectangle 27.png";
import arrowUp from "../../assets/icon/fi_chevron-up.png";
import { useParams } from "react-router-dom";
import * as requestAPI from "../../api/api";
import { useSelector } from "react-redux";
import check from "../../assets/icon/fi_check.png";

const PaymentChooseBank = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState({
    name: "",
    category: "",
    dayRent: null,
    price: null,
    total_price: null,
    bank: "",
  });

  // console.log(data.bank);
  // console.log(data.total_price);
  const state = useSelector((state) => state.detail);
  // console.log(data);

  useEffect(() => {
    getOrder();
  }, [data.bank]);

  const chooseBank = (bankName) => {
    setData({
      ...data,
      bank: bankName,
    });
  };

  const { id } = useParams();
  const token = localStorage.getItem("access_token");
  const config = {
    headers: { access_token: token },
  };
  const getOrder = async () => {
    try {
      const res = await requestAPI.getOrder(config, id);
      // console.log(res);
      setData({
        ...data,
        name: res.data.Car.name,
        category: res.data.Car.category,
        dayRent: state.day_rent,
        price: new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(res.data.Car.price),
        total_price: new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(res.data.total_price),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const show = () => {
    setShowDetail(!showDetail);
  };

  // console.log(props.data);
  return (
    <div className="payment-choose-bank mx-auto">
      <div className="left-side">
        <div className="top-side">
          <h4> Pilih Bank Transfer</h4>
          <p>
            Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
            atau Mobile Banking
          </p>
        </div>
        <div className="bottom-side">
          <div className="bank-list" id="bank_list">
            {props.data.map((bankDetail, index) => (
              <div className="frame">
                <div
                  name={bankDetail.name}
                  key={index}
                  className="bank"
                  onClick={() => chooseBank(bankDetail.name)}>
                  <div className="bank-detail">
                    <div className="name">
                      <h3>{bankDetail.name}</h3>
                    </div>
                    <p>{bankDetail.desc}</p>
                  </div>
                  {data.bank == bankDetail.name ? (
                    <img
                      src={check}
                      alt=""
                      className={data.bank ? "show" : "hide"}
                    />
                  ) : null}
                </div>
                <img src={rectangle27} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="car-detail">
          <h5>{data.name}</h5>
          <h6>{data.category}</h6>
        </div>
        {/* Dropdown Content  */}
        <div className="short-detail">
          <div>
            <h5>Total</h5>
            <img
              src={arrowUp}
              alt=""
              onClick={show}
              className={showDetail ? "show" : null}
            />
          </div>
          <h5>{data.total_price}</h5>
        </div>
        <div className={showDetail ? "total-detail" : "hide"}>
          <div className="detail">
            <h5>harga</h5>
            <ul>
              <div className="list">
                <li>
                  Sewa Mobil {data.price} x {data.dayRent} hari{" "}
                </li>
                <h5>{data.total_price}</h5>
              </div>
            </ul>
          </div>
          <div className="detail">
            <h5>Biaya Lainnya</h5>
            <ul>
              <div className="list">
                <li>Pajak</li>
                <h5 className="include">Termasuk</h5>
              </div>
              <div className="list">
                <li>Biaya Makan Sopir</li>
                <h5 className="include">Termasuk</h5>
              </div>
            </ul>
          </div>
          <div className="detail">
            <h5>Belum Termasuk</h5>
            <ul>
              <li>Bensin</li>
              <li>Tol dan Parkir</li>
            </ul>
          </div>
          <div className="line1"></div>
        </div>
        <div className="total">
          <h5>Total</h5>
          <h5>{data.total_price}</h5>
        </div>
        <div
          disabled={data.bank ? true : false}
          className={data.bank ? "button" : "disabled"}>
          Bayar
        </div>
      </div>
    </div>
  );
};

export default PaymentChooseBank;
