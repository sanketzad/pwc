const TableItem = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.occupation}</td>
      <td>{user.dob}</td>
    </tr>
  );
};

export default TableItem;
