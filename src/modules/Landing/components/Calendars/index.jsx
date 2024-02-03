import React from "react";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "../../../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";
import "./style.css";
import calendar from "../../assets/icon/fi_calendar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  disableButton,
  enableButton,
  resetDateRent,
  saveDateRent,
} from "../../features/detail/detailSlice";
import { FormatDate1, FormatDate2 } from "../../../utils/formatDate";

const Calendars = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dayDiff, setDayDiff] = useState();
  const dispatch = useDispatch();

  const { is_disabled } = useSelector((state) => state.detail);
  const state = useSelector((state) => state.detail);
  const [pickDate, setPickDate] = useState(false);
  // console.log(pickDate);

  const handleReset = () => {
    setPickDate(false);
    setDateRange([null, null]);
    setDayDiff(null);
    dispatch(resetDateRent());
    dispatch(disableButton());
  };

  const handleGetDateRent = () => {
    if (startDate && endDate) {
      const payload = {
        start_date: FormatDate1(startDate),
        end_date: FormatDate1(endDate),
        start_rent_at: FormatDate2(startDate),
        finish_rent_at: FormatDate2(endDate),
        day_rent: dayDiff,
      };
      // console.log(payload);
      dispatch(saveDateRent(payload));
      dispatch(enableButton());
      // console.log(payload);
    }
  };

  const handleOpenCloseCalendar = () => {
    setPickDate(true);
    if (startDate && endDate) {
      setPickDate(!pickDate);
    }
  };

  // const state = useSelector((state) => state.detail);

  const dateToday = new Date();
  const tommorow = new Date(dateToday.getTime() + 86400000);
  // console.log(dateToday);

  useEffect(() => {
    handleGetDateRent();
    if (dayDiff > 7) {
      alert("Maksimal 7 hari");
      setDateRange([null, null]);
      setDayDiff(null);
      dispatch(resetDateRent());
      dispatch(disableButton());
    } else if (startDate && endDate) {
      // console.log(state);
      const diff = endDate.getTime() - startDate.getTime();
      setDayDiff(diff / (1000 * 60 * 60 * 24));
    }

    // console.log(state);  //go to line 27
  }, [dayDiff, startDate, endDate, dateRange]);

  return (
    <div className="calendar">
      <div onClick={handleOpenCloseCalendar}>
        <ReactDatePicker
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
          placeholderText={
            !state.end_date
              ? "Pilih tanggal awal dan akhir sewa"
              : `${state.start_date} - ${state.end_date}`
          }
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          minDate={tommorow}
          shouldCloseOnSelect={false}
          open={pickDate}
          dateFormat={"d MMM yyyy"}
          onChange={(update) => {
            setDateRange(update);
          }}>
          <button
            disabled={startDate && endDate ? false : true}
            className={startDate && endDate ? "pick-date" : " disabled-button"}
            onClick={handleOpenCloseCalendar}>
            Pilih Tanggal
          </button>
        </ReactDatePicker>
      </div>
      <FontAwesomeIcon
        className={is_disabled ? "show-close" : "hide-close"}
        onClick={handleReset}
        icon={faXmark}
      />
      <img src={calendar} alt="" className="img" />
    </div>
  );
};

export default Calendars;
