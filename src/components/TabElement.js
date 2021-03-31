import { useEffect, useState } from "react";
import { getData, MESI } from "../helpers/helpers";
import MonthElement from "./MonthElement";

export default function TabElement() {
  const [months, setMonth] = useState([]);

  // Fetch API endpoint on page load
  useEffect(() => {
    async function fetching() {
      const data = await getData();
      setMonth(data.mesi);
    }
    fetching();
  }, []);
  return (
    <div>
      {months.map((month, index) => {
        return (
          <div key={`month-${index}`}>
            <MonthElement month={month} name={MESI[index]} />
          </div>
        );
      })}
    </div>
  );
}
