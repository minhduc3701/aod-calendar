import React from "react";
import "./App.css";
import CalenderInline1 from "aod-dependencies1/calendar-custom/CalenderInline";
import { Toggle } from "aod-dependencies1/Toggle";

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const onGetDataCalendar = (val: Date | { date: Date }[]): void => {
    console.log(val);
  };

  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };

  return (
    <div className="App">
      <div className="toggle-wrapper">
        <Toggle label="Dark mode" onChange={onChangeMode} />
      </div>
      <CalenderInline1
        autoNavigateOnSelection={true} //required
        showGoToToday={false} //required
        highlightSelectedMonth={true}
        showMonthPickerAsOverlay={true}
        showWeekNumbers={false}
        showSixWeeksByDefault={false}
        onSelectChanged={onGetDataCalendar}
        switchMode={true}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
