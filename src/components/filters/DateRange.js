import classes from "./DateRange.module.css";

const DateRange = () => {
  return (
    <div className={classes.range}>
      <div className={classes.start}>
        <label htmlFor="start">Start date:</label>
        <input type="date" id="start" name="trip-start" />
      </div>
      <div className={classes.end}>
        <label htmlFor="end">End date:</label>
        <input type="date" id="end" name="trip-end" />
      </div>
    </div>
  );
};

export default DateRange;
