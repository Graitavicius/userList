import { uiActions } from "./ui-slice";
import { tableActions } from "./table-slice";

export const fetchTableData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Couldnt fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const tableData = await fetchData();
      dispatch(
        tableActions.fetchTable({
          users: tableData,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched table data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching table data failed",
        })
      );
    }
  };
};