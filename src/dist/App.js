"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var CalenderInline_1 = require("aod-dependencies1/calendar-custom/CalenderInline");
var Toggle_1 = require("aod-dependencies1/Toggle");
function App() {
    var _a = react_1["default"].useState(""), darkMode = _a[0], setDarkMode = _a[1];
    var onGetDataCalendar = function (val) {
        console.log(val);
    };
    var onChangeMode = function () {
        if (darkMode === "dark") {
            setDarkMode("light");
        }
        if (darkMode !== "dark") {
            setDarkMode("dark");
        }
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "toggle-wrapper" },
            react_1["default"].createElement(Toggle_1.Toggle, { label: "Dark mode", onChange: onChangeMode })),
        react_1["default"].createElement(CalenderInline_1["default"], { autoNavigateOnSelection: true, showGoToToday: false, highlightSelectedMonth: true, showMonthPickerAsOverlay: true, showWeekNumbers: false, showSixWeeksByDefault: false, onSelectChanged: onGetDataCalendar, switchMode: true, darkMode: darkMode })));
}
exports["default"] = App;
