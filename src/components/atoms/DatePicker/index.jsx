import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ startDate = new Date(), onChangeDate }) => {
  return <ReactDatePicker selected={startDate} onChange={onChangeDate} />;
};

export default DatePicker;
