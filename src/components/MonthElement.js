import { separateNum } from "../helpers/helpers";
import style from "./MonthElement.module.css";

export default function MonthElement({ month, name }) {
  return (
    <div className={style.tile}>
      <div className={style.tileHeader}>
        <p className={style.title}>{name}</p>
      </div>
      <div className={style.tileFooter}>
        <p>{month.documenti} doc.</p>
        <p className={style.total}>{separateNum(month.importo)} €</p>
        <div className={style.selector}></div>
      </div>
    </div>
  );
}
