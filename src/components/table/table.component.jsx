import { useContext } from "react";
import TableItem from "../table-item/table-item.component";
import { UserContext } from "../../userContext";
import "./table.styles.css";

const Table = () => {
  const [users, setUsers] = useContext(UserContext);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Occupation</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableItem key={user.dob} user={user} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
