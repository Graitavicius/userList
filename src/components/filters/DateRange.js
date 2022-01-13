//import classes from "./DateRange.module.css";
import "./DateRange.module.css";
// const DateRange = () => {
//   return (
//     <div className={classes.range}>
//       <div className={classes.start}>
//         <label htmlFor="start">Start date:</label>
//         <input type="date" id="start" name="trip-start" />
//       </div>
//       <div className={classes.end}>
//         <label htmlFor="end">End date:</label>
//         <input type="date" id="end" name="trip-end" />
//       </div>
//     </div>
//   );
// };

// export default DateRange;

import { useState } from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import moment from "moment";
const DateRange = (props) => {
  const [rangeStartValue, setRangeStartValue] = useState(
    new Date("2020, 02, 03")
  );
  const [rangeEndValue, setRangeEndValue] = useState(null);

  const rangeInputChangeHandler = (event) => {
    const startDate = moment(event.target.value[0]).format("D/M/yyyy");
    const endDate = moment(event.target.value[1]).format("D/M/yyyy");
    setRangeStartValue(startDate);
    setRangeEndValue(endDate);
  };

  const filterByDateHandler = () => {
    props.onFilterByDateRange(rangeStartValue, rangeEndValue);
  };

  return (
    <div>
      <DateRangePickerComponent
        placeholder="Filter by date range"
        format="dd/MM/yyyy"
        onChange={rangeInputChangeHandler}
      />
      <button onClick={filterByDateHandler}>Filter</button>
    </div>
  );
};

export default DateRange;

// const submitHandler = (event) => {
//   event.preventDefault();
//   console.log(searchValue);
//   props.onFilter(searchValue);
//   setSearchValue("");
// };
