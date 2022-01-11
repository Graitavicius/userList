import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchTableData } from "./store/table-actions";
import UserTable from "./components/users/UserTable";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.table.users);
  const date = useSelector((state) => state.table.date);

  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [users, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <UserTable users={users} date={date} />
    </React.Fragment>
  );
}

export default App;
