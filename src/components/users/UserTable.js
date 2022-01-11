import classes from "./UserTable.module.css";

import Search from "../filters/Search";
import DateRange from "../filters/DateRange";
import React from "react";
import User from "./User";

const UserTable = (props) => {
  // const [date, setDate] = useState("");
  const status = ["Active", "Inactive"];
  const randomStatusArray = [];

  for (let i = 0; i < props.users.length; i++) {
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    randomStatusArray.push(randomStatus);
  }

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const startDateArray = [];
  const endDateArray = [];

  for (let i = 0; i < props.users.length; i++) {
    const x = randomDate(new Date(2017, 0, 1), new Date(2019, 11, 31))
      .toISOString()
      .split("T")[0];

    const y = randomDate(new Date(2019, 11, 31), new Date())
      .toISOString()
      .split("T")[0];

    startDateArray.push(x);
    endDateArray.push(y);
  }

  const budgetArray = [];
  for (let i = 0; i < props.users.length; i++) {
    let budget = Math.floor(Math.random() * 10000);
    budgetArray.push(budget);
  }

  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <DateRange className={classes.range} />
        <Search className={classes.search} />
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Active</th>
              <th>Budget</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, index) => (
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                startDate={startDateArray[index]}
                endDate={endDateArray[index]}
                status={randomStatusArray[index]}
                budget={budgetArray[index]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
