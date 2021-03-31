import { useState } from "react";
import { separateNum } from "../helpers/helpers";
import style from "./MonthElement.module.css";
const blue = "#0D97D5";
const green = "#00875A";
export default function MonthElement({
  month,
  name,
  greenSize,
  selectorColor,
  onClick,
}) {
  const handleColor = () => {
    return selectorColor ? green : blue;
  };

  return (
    <div className={style.wrapper}>
      <div className={style.tile}>
        <div className={style.tileHeader}>
          <p className={style.title}>{name}</p>
        </div>
        <div className={style.tileFooter}>
          <p>{month.documenti} doc.</p>
          <p className={style.total}>{separateNum(month.importo)} €</p>
          <div
            className={style.selector}
            style={{
              backgroundColor: handleColor(),
            }}
          ></div>
        </div>
      </div>
      <div
        className={style.greenBackground}
        style={{ height: greenSize }}
      ></div>
    </div>
  );
}
