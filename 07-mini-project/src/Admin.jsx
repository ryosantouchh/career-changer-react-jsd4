import { useContext } from "react";
import { Context } from "./UserContext";

const Admin = () => {
  // You have to get all user from fetchData() and display as table html.
  const { fetchData } = useContext(Context);
  // example of fetchData() usage
  // const data = fetchData()
  // data will return array of user object, otherwise empty array
  // example of user Object show below
  // {
  //     id: 0,
  //     username: 'example',
  //     fullname: 'example',
  //     organization: 'example'
  // }

  const users = fetchData();
  // console.log(users);

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>ID</th>
          <th>USERNAME</th>
          <th>FULLNAME</th>
          <th>ORGANIZATION</th>
        </tr>
        {/* this is example of mapping array of object to html. */}
        {users.map(
          (item, idx) => (
            // item.username === "admin" ? null : (
            <tr key={idx}>
              <td>{idx}</td>
              <td>{item.username}</td>
              <td>{item.fullname}</td>
              <td>{item.organization}</td>
            </tr>
          )
          // )
        )}
      </table>
    </div>
  );
};

export default Admin;
