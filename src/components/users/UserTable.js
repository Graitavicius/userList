import classes from "./UserTable.module.css";

import { useDispatch } from "react-redux";
import Search from "../filters/Search";
import DateRange from "../filters/DateRange";
import React, { useState, useEffect } from "react";
import User from "./User";
import { uiActions } from "../../store/ui-slice";

const UserTable = (props) => {
  const status = ["Active", "Inactive"];
  const randomStatusArray = [];
  const dispatch = useDispatch();

  for (let i = 0; i < props.users.length; i++) {
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    randomStatusArray.push(randomStatus);
  }

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(props.users);
  }, [props.users]);

  const filterByName = (filterValue) => {
    if (filterValue) {
      setFilteredUsers(
        props.users.filter((user) =>
          user.name.toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    }
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Showing filtered by name users",
      })
    );
  };

  const resetData = () => {
    setFilteredUsers(props.users);
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Showing all users",
      })
    );
  };

  const filterByDate = (start, end) => {
    if (start && end) {
      setFilteredUsers(
        props.users.filter((user) => {
          const startDateUsers = user.startDate.split("/").join("-");
          const endDateUsers = user.endDate.split("/").join("-");
          const rangeStart = start.split("/").join("-");
          const rangeEnd = end.split("/").join("-");

          const startDateUsersObj = new Date(startDateUsers);
          const endDateUsersObj = new Date(endDateUsers);
          const rangeStartObj = new Date(rangeStart);
          const rangeEndObj = new Date(rangeEnd);

          return (
            rangeStartObj.getTime() <= startDateUsersObj.getTime() &&
            rangeEndObj.getTime() >= endDateUsersObj.getTime()
          );
        })
      );
    }
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Showing filtered by date range users",
      })
    );
  };

  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <DateRange
          className={classes.range}
          onFilterByDateRange={filterByDate}
        />
        <Search className={classes.search} onFilter={filterByName} />
        <button className={classes.reset} onClick={resetData}>
          Reset
        </button>
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
            {filteredUsers.map((user, index) => (
              <User
                key={user.id + Math.random()}
                id={user.id}
                name={user.name}
                startDate={user.startDate}
                endDate={user.endDate}
                status={randomStatusArray[index]}
                budget={user.budget}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
