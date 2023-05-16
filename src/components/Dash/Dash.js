import React, { useState } from "react";
import ButtonPage from "../../pages/ButtonPage/ButtonPage";
import CardPage from "../../pages/CardPage/CardPage";
import InputPage from "../../pages/InputPage/InputPage";
import classes from "./Dash.module.css";

const Dash = ({ component }) => {
  return (
    <>
      {component === "button" && <ButtonPage />}
      {component === "input" && <InputPage />}
      {component === "card" && <CardPage />}
    </>
  );
};
export default Dash;
