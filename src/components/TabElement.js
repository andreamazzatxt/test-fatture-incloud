import { useEffect, useState } from "react";
import { findBigger, getData, MESI } from "../helpers/helpers";
import MonthElement from "./MonthElement";
import style from "./TabElement.module.css";

const calcGreenPx = (amount, biggerAmount) => {
  const height = biggerAmount ? parseInt((amount * 75) / biggerAmount) : 0;
  return height;
};

export default function TabElement() {
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
  }

  function handleHover(index) {
    if (mouseDown) {
      let array = selectedArray.slice();
      array[index] = !array[index];
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
              selectorColor={selectedArray[index]}
            />
          </div>
        );
      })}
    </div>
  );
}
