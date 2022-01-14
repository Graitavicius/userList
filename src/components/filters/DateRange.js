import classes from "./DateRange.module.css";

import { useState } from "react";

import moment from "moment";

const DateRange = (props) => {
  const [rangeStartValue, setRangeStartValue] = useState(
    new Date("2020, 02, 03")
  );
  const [rangeEndValue, setRangeEndValue] = useState(null);

  const startDateInputHandler = (event) => {
    setRangeStartValue(moment(event.target.value).format("M/D/yyyy"));
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
        <input id="end" type="date" onChange={endDateInputHandler} />
      </div>

      <button
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

// import classes from "./DateRange.module.css";

// import { useState } from "react";
// import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
// import moment from "moment";

// const DateRange = (props) => {
//   const [rangeStartValue, setRangeStartValue] = useState(
//     new Date("2020, 02, 03")
//   );
//   const [rangeEndValue, setRangeEndValue] = useState(null);

//   const rangeInputChangeHandler = (event) => {
//     const startDate = moment(event.target.value[0]).format("M/D/yyyy");
//     const endDate = moment(event.target.value[1]).format("M/D/yyyy");
//     setRangeStartValue(startDate);
//     setRangeEndValue(endDate);
//   };

//   const filterByDateHandler = () => {
//     props.onFilterByDateRange(rangeStartValue, rangeEndValue);
//   };

//   return (
//     <div className={classes.range}>
//       <DateRangePickerComponent
//         placeholder="Filter by date range"
//         format="MM/dd/yyyy"
//         onChange={rangeInputChangeHandler}
//       />
//       <button
//         type="button"
//         className={classes["filter-button"]}
//         onClick={filterByDateHandler}
//       >
//         Filter
//       </button>
//     </div>
//   );
// };

// export default DateRange;
