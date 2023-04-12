import { useEffect, useState } from "react";

const AutoSync = () => {
  const [employees, setEmployees] = useState([]);

  const syncInfo = () => {
    let data = [
      { name: "John", orgazation: "ABC Inc.", position: "Developer" },
      { name: "Jane", orgazation: "XYZ Corp.", position: "Designer" },
      { name: "Bob", orgazation: "123 LLC.", position: "Manager" },
    ];

    setEmployees(data);
  };

  useEffect(syncInfo, []);

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Organization</th>
          <th>Position</th>
        </tr>
        {employees.map((e, idx) => {
          return (
            <tr key={idx}>
              <td>{e.name}</td>
              <td>{e.orgazation}</td>
              <td>{e.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default AutoSync;
