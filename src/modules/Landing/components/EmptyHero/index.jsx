import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const EmptyHero = () => {
  const state = useSelector((state) => state.payment);
  return (
    <div className={!state.isSelectedBank ? "empty-hero" : "less-height"}></div>
  );
};

export default EmptyHero;
