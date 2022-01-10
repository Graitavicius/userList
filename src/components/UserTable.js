import classes from "./UserTable.module.css";

import Search from "./Search";
import DateRange from "./DateRange";
import React from "react";

const UserTable = () => {
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <DateRange className={classes.range} />
        <Search className={classes.search} />
        <table className={classes.table}>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget</th>
          </tr>
          <tr>
            <td>John Peterson</td>
            <td>Johny123</td>
            <td>2020-02-31</td>
            <td>2021-05-15</td>
            <td>Active</td>
            <td>2000 EUR</td>
          </tr>
          <tr>
            <td>John Peterson</td>
            <td>Johny123</td>
            <td>2020-02-31</td>
            <td>2021-05-15</td>
            <td>Active</td>
            <td>2000 EUR</td>
          </tr>
          <tr>
            <td>John Peterson</td>
            <td>Johny123</td>
            <td>2020-02-31</td>
            <td>2021-05-15</td>
            <td>Active</td>
            <td>2000 EUR</td>
          </tr>
          <tr>
            <td>John Peterson</td>
            <td>Johny123</td>
            <td>2020-02-31</td>
            <td>2021-05-15</td>
            <td>Active</td>
            <td>2000 EUR</td>
          </tr>
          <tr>
            <td>John Peterson</td>
            <td>Johny123</td>
            <td>2020-02-31</td>
            <td>2021-05-15</td>
            <td>Active</td>
            <td>2000 EUR</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
