import React from "react";
import ReactDatePicker from "react-datepicker";
import "../../../styles/date-picker.scss";

const DatePicker = ({ selected, onChangeDate }) => {
  return <ReactDatePicker selected={selected} onChange={onChangeDate} />;
};

export default DatePicker;
