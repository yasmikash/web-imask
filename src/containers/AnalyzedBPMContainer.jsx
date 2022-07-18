import React, { useEffect, useState } from "react";
import {
  Button,
  ChartSkeleton,
  DatePicker,
  LineChart,
} from "../components/atoms";
import moment from "moment";
import { useApp } from "../context/AppContext";
import { REQUEST_STATUS } from "../utils/constants";

const AnalyzedBPMContainer = () => {
  const { fecthAnalyzedBpm, analyzedBpm, requestStatus } = useApp();

  const [to, setTo] = useState(
    analyzedBpm ? new Date(analyzedBpm.to) : new Date()
  );
  const [from, setFrom] = useState(
    analyzedBpm
      ? new Date(analyzedBpm.from)
      : moment().subtract(30, "days").toDate()
  );

  const handleChangeStartDate = (date) => {
    setFrom(date);
  };

  const handleChangeEndDate = (date) => {
    setTo(date);
  };

  const handleLoadChartData = () => {
    const data = {
      to: moment(to).format("YYYY-MM-DD"),
      from: moment(from).format("YYYY-MM-DD"),
    };
    fecthAnalyzedBpm(data);
  };

  useEffect(() => {
    if (!analyzedBpm) {
      const to = moment().format("YYYY-MM-DD");
      const from = moment().subtract(30, "days").format("YYYY-MM-DD");
      const data = { from, to };
      fecthAnalyzedBpm(data);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center my-2 gap-2 items-end">
        <div className="flex flex-col">
          <p className="text-xs">From:</p>
          <DatePicker selected={from} onChangeDate={handleChangeStartDate} />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">To:</p>
          <DatePicker selected={to} onChangeDate={handleChangeEndDate} />
        </div>
        <div className="w-10">
          <Button onClick={handleLoadChartData} title="Load" />
        </div>
      </div>
      {REQUEST_STATUS.IDLE === requestStatus.fecthAnalyzedBpm ||
      REQUEST_STATUS.PENDING === requestStatus.fecthAnalyzedBpm ? (
        <ChartSkeleton />
      ) : (
        <LineChart data={analyzedBpm.data} labels={analyzedBpm.labels} />
      )}
    </div>
  );
};

export default AnalyzedBPMContainer;
