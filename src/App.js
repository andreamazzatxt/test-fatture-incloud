import { useState } from "react";
import "./App.css";
import InfoBox from "./components/InfoBox";
import TabElement from "./components/TabElement";

function App() {
  const [selected, setSelected] = useState([]);
  return (
    <div className="App">
      <TabElement setSelected={setSelected} />
      <InfoBox selectedMonths={selected} />
    </div>
  );
}

export default App;
