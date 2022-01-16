import classes from "./DateRange.module.css";

import { useState } from "react";

import moment from "moment";

const DateRange = (props) => {
  const [rangeStartValue, setRangeStartValue] = useState(null);
  const [rangeEndValue, setRangeEndValue] = useState(null);

  const [startDateExists, setStartDateExists] = useState(false);

  const startDateInputHandler = (event) => {
    setRangeStartValue(moment(event.target.value).format("M/D/yyyy"));
    setStartDateExists(true);
  };

  const endDateInputHandler = (event) => {
    setRangeEndValue(moment(event.target.value).format("M/D/yyyy"));
  };

  const filterByDateHandler = () => {
    props.onFilterByDateRange(rangeStartValue, rangeEndValue);
  };

  return (
    <div className={classes.range}>
      <div className={classes["range-start"]}>
        <label htmlFor="start">Start date</label>
        <input id="start" type="date" onChange={startDateInputHandler} />
      </div>
      <div className={classes["range-end"]}>
        <label>End date</label>
        <input
          disabled={!startDateExists}
          id="end"
          type="date"
          onChange={endDateInputHandler}
        />
      </div>
      <button
        disabled={!rangeStartValue || !rangeEndValue}
        type="button"
        className={classes["filter-button"]}
        onClick={filterByDateHandler}
      >
        Filter
      </button>
    </div>
  );
};

export default DateRange;
