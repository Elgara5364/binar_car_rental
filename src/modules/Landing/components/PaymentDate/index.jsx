import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as requestAPI from "../../api/api";

const PaymentDate = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.detail);
  console.log(state);
  const [detail, setDetail] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    handleGetOrder();
  }, []);

  const handleGetOrder = async () => {
    const token = localStorage.getItem("access_token");

    const config = {
      headers: {
        access_token: token,
      },
    };
    try {
      const res = await requestAPI.getOrder(config, id);
      setDetail({
        ...detail,
        name: res.data.Car.name,
        category: res.data.Car.category,
      });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment-date mx-auto">
      <div className="container">
        <div className="detail-payment">
          <h6>Detail Pesananmu</h6>
        </div>
        <div className="detail-desc">
          <div className="detail-car">
            <div className="car-type">
              <h6>Nama / Tipe Mobil</h6>
              <h5>{detail.name}</h5>
            </div>
            <div className="car-cat">
              <h6>Kategori</h6>
              <h5>{detail.category}</h5>
            </div>
          </div>
          <div className="detail-rent">
            <div className="start-rent-car">
              <h6>Tanggal Mulai Sewa</h6>
              <h5>{state.start_date}</h5>
            </div>
            <div className="finish-rent-car">
              <h6>finish_rent_at</h6>
              <h5>{state.end_date}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDate;
