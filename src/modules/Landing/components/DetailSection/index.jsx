import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as requestAPI from "../../api/api";
import Calendars from "../Calendars";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fiUser from "../../assets/icon/fi_users.png";

const DetailSection = () => {
  const [car, setCar] = useState({});
  const { id } = useParams();
  const { is_disabled } = useSelector((state) => state.detail);
  const state = useSelector((state) => state.detail);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // console.log(state);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await requestAPI.detailCar(id);
      // console.log(res);
      setCar(res.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const continuePay = async () => {
    // alert("button berhasil di klik");

    const payload = {
      start_rent_at: state.start_rent_at,
      finish_rent_at: state.finish_rent_at,
      car_id: id,
    };
    const token = localStorage.getItem("access_token");
    // console.log(token);
    if (!token) {
      alert("Login dulu yuk");
      return navigate("/register");
    }

    const config = {
      headers: { access_token: token },
    };

    try {
      const res = await requestAPI.createOrder(payload, config);
      const orderId = res.data.id;
      navigate(`/paymentPages/${orderId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container detail-wrapper">
      <div className="detail-left">
        <div>
          <h5 className="title fw-bold ms-3">Tentang Paket</h5>
        </div>
        <div>
          <h6 className="title fw-bold ms-3 mt-4">Include</h6>
          <div>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Apa saja yang termasuk
              dalam paket misal durasi max 12 jam
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Sudah termasuk bensin
              selama 12 jam
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Sudah termasuk Tiket
              Wisata
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Sudah termasuk pajak
            </p>
          </div>
        </div>
        <div>
          <h6 className="title fw-bold ms-3">Exclude</h6>
          <div>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk biaya
              makan sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Jika overtime lebih dari
              12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
          </div>
        </div>
        <div>
          <h6 className="title fw-bold ms-3">Refund, Reschedule, Overtime</h6>
          <div>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk biaya
              makan sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Jika overtime lebih dari
              12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk biaya
              makan sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Jika overtime lebih dari
              12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk biaya
              makan sopir Rp 75.000/hari
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Jika overtime lebih dari
              12 jam akan ada tambahan biaya Rp 20.000/jam
            </p>
            <p className="detail-desc">
              <i className="bi bi-dot detail-icon"></i>Tidak termasuk akomodasi
              penginapan
            </p>
          </div>
        </div>
      </div>
      <div className="detail-right">
        <div className="detail-img-wrapper">
          <img className="detail-img" src={car.image} alt="" />
        </div>
        <p className="fw-bold ms-3 mb-1">{car.name}</p>
        <div className="mb-3 cat">
          <div className="ms-3 img-user">
            <img src={fiUser} alt="" />
          </div>
          <p className="ms-3 detail-category">{car.category}</p>
        </div>

        <div className="ms-3 rentDuration">
          <p>Tentukan lama sewa mobil (max. 7 hari) </p>
          <Calendars />
        </div>
        <div className="detail-price">
          <p>Total</p>
          <p>{`Rp.${car.price}`}</p>
        </div>
        <button
          className={is_disabled ? "btnPayment" : "disabled"}
          onClick={continuePay}
          disabled={!is_disabled}>
          Lanjutkan Pembayaran
        </button>
      </div>
    </div>
  );
};

export default DetailSection;
