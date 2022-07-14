import React from "react";
import { DatePicker, LineChart } from "../components/atoms";

const DataChartContainer = () => {
  const handleChangeStartDate = (date) => {
    console.log(date);
  };

  return (
    <div>
      <div className="flex justify-center my-2">
        <div className="flex flex-col">
          <p className="text-xs">From:</p>
          <DatePicker
            startDate={new Date()}
            onChangeDate={handleChangeStartDate}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">To:</p>
          <DatePicker
            startDate={new Date()}
            onChangeDate={handleChangeStartDate}
          />
        </div>
      </div>
      <LineChart />
    </div>
  );
};

export default DataChartContainer;
