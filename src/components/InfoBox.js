import { useEffect, useState } from "react";
import { separateNum } from "../helpers/helpers";
import style from "./InfoBox.module.css";

export default function InfoBox({ selectedMonths }) {
  const [totalImporto, setTotalImporto] = useState(0);
  const [totalDocumenti, setTotalDocumenti] = useState(0);
  useEffect(() => {
    const newImporto = selectedMonths.reduce((acc, month) => {
      return acc + parseInt(month.importo);
    }, 0);
    setTotalImporto(newImporto);
    const newDocumenti = selectedMonths.reduce((acc, month) => {
      return acc + parseInt(month.documenti);
    }, 0);
    setTotalDocumenti(newDocumenti);
  }, [selectedMonths]);
  return (
    <div className={style.info}>
      <div className={style.box}>
        {selectedMonths.map((month) => {
          return (
            <div>
              <p>{month.name}</p>
            </div>
          );
        })}
      </div>
      <div className={style.totalContainer}>
        {totalDocumenti ? <p>{totalDocumenti} doc.</p> : ""}
        {totalImporto ? (
          <p className={style.total}>{separateNum(totalImporto)} €</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
