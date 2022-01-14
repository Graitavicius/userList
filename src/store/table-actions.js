import { uiActions } from "./ui-slice";
import { tableActions } from "./table-slice";
import moment from "moment";

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

      //implementing mock dates and budget for api without the values
      // -----------------------------------------------------------

      const budgetArray = [];
      for (let i = 0; i < data.length; i++) {
        let budget = Math.floor(Math.random() * 100000);
        budgetArray.push(budget);
      }

      function randomDate(start, end) {
        return new Date(
          start.getTime() + Math.random() * (end.getTime() - start.getTime())
        );
      }

      const startDateArray = [];
      const endDateArray = [];

      for (let i = 0; i < data.length; i++) {
        const x = randomDate(new Date(2017, 0, 1), new Date(2019, 11, 31))
          .toISOString()
          .split("T")[0];
        const startDateFormatted = moment(x).format("M/D/yyyy");

        const y = randomDate(new Date(2019, 11, 31), new Date())
          .toISOString()
          .split("T")[0];

        const endDateFormatted = moment(y).format("M/D/yyyy");

        startDateArray.push(startDateFormatted);
        endDateArray.push(endDateFormatted);
      }

      //--------------------------------------------------

      const transformedData = data.map((userData, index) => {
        return {
          id: userData.id,
          name: userData.name,
          startDate: startDateArray[index],
          endDate: endDateArray[index],
          budget: budgetArray[index],
        };
      });
      return transformedData;
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

export const addMoreTableData = (data) => {
  const transformedData = data.map((userData) => {
    return {
      id: userData.id,
      name: userData.name,
      startDate: userData.startDate,
      endDate: userData.endDate,
      budget: userData.Budget,
    };
  });

  const filteredData = transformedData.filter((data) => {
    const startObj = new Date(data.startDate);
    const endObj = new Date(data.endDate);
    return endObj.getTime() > startObj.getTime();
  });
  console.log(transformedData);

  return async (dispatch) => {
    try {
      dispatch(
        tableActions.fetchMoreUsers({
          users: filteredData,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully added more campaigns!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching more data failed",
        })
      );
    }
  };
};

// export const addMoreUsers = (data) => {
//   return async (dispatch) => {
//     const addUsers = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         throw new Error("Couldnt fetch data!");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const tableData = await addUsers();
//       dispatch(
//         tableActions.fetchTable({
//           users: tableData,
//         })
//       );
//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Fetched table data successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Fetching table data failed",
//         })
//       );
//     }
//   };
// };
