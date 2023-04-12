import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  let employees = [
    { name: "John", orgazation: "ABC Inc.", position: "Developer" },
    { name: "Jane", orgazation: "XYZ Corp.", position: "Designer" },
    { name: "Bob", orgazation: "123 LLC.", position: "Manager" },
  ];

  return (
    <div className="App">
      {" "}
      {/* Add class name */}
      <h1>Table Example</h1>
      <div>
        <input
          type="text"
          placeholder="Type new name here"
          style={{ margin: "4px" }}
        />
        <input
          type="text"
          placeholder="Type new organization here"
          style={{ margin: "4px" }}
        />
        <input
          type="text"
          placeholder="Type new position here"
          style={{ margin: "4px" }}
        />
        <button style={{ margin: "4px" }}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>ABC Inc.</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>XYZ Corp.</td>
            <td>Designer</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>123 LLC</td>
            <td>Manager</td>
          </tr>
          {/* let employees = [
    { name: "John", orgazation: "ABC Inc.", position: "Developer" },
    { name: "Jane", orgazation: "XYZ Corp.", position: "Designer" },
    { name: "Bob", orgazation: "123 LLC.", position: "Manager" },
  ]; */}
          {employees.map((item, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{item.name}</td>
                <td>{item.orgazation}</td>
                <td>{item.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
