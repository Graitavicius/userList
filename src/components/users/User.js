import classes from "./User.module.css";

const User = ({ id, name, startDate, endDate, status, budget }) => {
  let active = true;
  if (status === "Active") {
    active = true;
  } else {
    active = false;
  }

  return (
    <tr>
      <td>Campaign {id}</td>
      <td>{name}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>
      <td className={`${active ? classes.statusSuccess : classes.statusError}`}>
        {status}
      </td>
      <td>{budget} &#8364;</td>
    </tr>
  );
};

export default User;
