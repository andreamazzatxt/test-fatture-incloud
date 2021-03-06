import { useEffect, useState } from "react";
import { separateNum } from "../helpers/helpers";
import style from "./MonthElement.module.css";

export default function MonthElement({
  month,
  name,
  greenSize,
  selectorCondition,
  selectorColor,
}) {
  const [height, setHeight] = useState(10);
  // handle delay on set new height for animation
  useEffect(() => {
    setTimeout(() => {
      setHeight(greenSize);
    }, 300);
  }, [greenSize]);
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
              backgroundColor: selectorColor,
              opacity: selectorCondition ? 1 : 0,
            }}
          >
            <div className={style.selectorShadow}></div>
          </div>
        </div>
      </div>
      <div className={style.greenBackground} style={{ height: height }}></div>
    </div>
  );
}
