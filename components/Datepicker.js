import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerComponent = ({ handler }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="text-black mt-4 ">
      <DatePicker selected={startDate} onSelect={() => handler(startDate)} onChange={(date) => setStartDate(date)} className="p-2 h-8" />
    </div>
  );
};

export default DatePickerComponent;