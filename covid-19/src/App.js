import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import StateList from "./components/statelist";
function App() {
  const [data, setData] = useState({});
  const [states, setStates] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
   fetch("https://data.incovid19.org/v4/min/data.min.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const stateCodes = Object.keys(json);
        setStates(stateCodes);
        setSelectedStates(stateCodes); 
      });
  }, []);

  const toggleState = (stateCode) => {
    setSelectedStates((prev) =>
      prev.includes(stateCode)
        ? prev.filter((s) => s !== stateCode)
        :[prev, stateCode]
    );
  };

  const toggleAllStates = () => {
    if (selectedStates.length === states.length) {
      setSelectedStates([]);
    } else {
      setSelectedStates(states);
    }
  };

  return (
    <div className="container">
      <Header selectedDate={selectedDate} onChangeDate={setSelectedDate} />

      <div className="main-content">
        <StateList
          states={states}
          selectedStates={selectedStates}
          onToggle={toggleState}
          onToggleAll={toggleAllStates}
        />
      </div>
    </div>
  );
}

export default App;