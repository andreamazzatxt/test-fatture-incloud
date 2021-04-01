import { useEffect, useState } from "react";
import { findBigger, getData, calcGreenPx, MESI } from "../helpers/helpers";
import MonthElement from "./MonthElement";
import style from "./TabElement.module.css";

const light = "#C6E7F5";
const blue = "#0D97D5";

export default function TabElement({ setSelected }) {
  const [months, setMonth] = useState([]);
  const [biggerAmount, setBiggerAmount] = useState(0);
  const [selectedArray, setSelectedArray] = useState(new Array(12).fill(false));
  const [mouseDown, setMouseDown] = useState(false);

  function handleMouseDown(index) {
    setMouseDown(true);
    let array = new Array(12).fill(false);
    array[index] = true;
    setSelectedArray(array);
  }
  function handleMouseUp(index) {
    setMouseDown(false);
    const selectedMonths = months
      .map((month, index) => {
        if (selectedArray[index]) {
          month.name = MESI[index];
          return month;
        } else {
          return false;
        }
      })
      .filter((element) => element);
    setSelected(selectedMonths);
  }

  function handleHover(index) {
    if (mouseDown) {
      let array = selectedArray.slice();
      array[index] = true;
      setSelectedArray(array);
    }
  }
  // Fetch API endpoint on page load
  // Set Data to render the page
  useEffect(() => {
    async function fetching() {
      const data = await getData();
      setMonth(data.mesi);
      const bigger = await findBigger(data.mesi.map((month) => month.importo));
      setBiggerAmount(bigger);
    }
    fetching();
  }, []);
  return (
    <div className={style.box}>
      {months.map((month, index) => {
        return (
          <div
            key={index}
            onMouseDown={() => handleMouseDown(index)}
            onMouseUp={() => handleMouseUp(index)}
            onMouseEnter={() => handleHover(index)}
          >
            <MonthElement
              month={month}
              name={MESI[index]}
              greenSize={calcGreenPx(month.importo, biggerAmount)}
              selectorCondition={selectedArray[index]}
              selectorColor={mouseDown ? light : blue}
            />
          </div>
        );
      })}
    </div>
  );
}
