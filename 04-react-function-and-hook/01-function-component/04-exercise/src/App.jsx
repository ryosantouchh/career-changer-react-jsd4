import React, { useState, useEffect } from "react";

const App = () => {
  const [list, setList] = useState([
    { name: "John", organization: "ABC Inc", position: "Developer" },
    { name: "Jane", organization: "XYZ Corp", position: "Designer" },
    { name: "Bob", organization: "113 LLC", position: "Manager" },
  ]);

  const [nameInput, setNameInput] = useState("");
  const [organizationInput, setOrganizationInput] = useState("");
  const [positionInput, setPositionInput] = useState("");

  const [newInput, setNewInput] = useState({
    name: "",
    organization: "",
    position: "",
  });

  const handleClickSave = (e) => {
    e.preventDefault();
    setNewInput({
      name: nameInput,
      organization: organizationInput,
      position: positionInput,
    });
    setNameInput("");
    setOrganizationInput("");
    setPositionInput("");
  };

  // const handleClickSave = (e) => {
  //   e.preventDefault();
  //   let newinp = {
  //     name: nameInput,
  //     organization: organizationInput,
  //     position: positionInput,
  //   };
  //   console.log(newInput);
  //   setList([...list, newinp]);
  // };

  useEffect(() => {
    if (
      newInput.name !== "" ||
      newInput.organization !== "" ||
      newInput.position !== ""
    ) {
      setList([...list, newInput]);
    }
  }, [newInput]);

  return (
    <div>
      <h1>Table Example</h1>
      <Form
        nameInput={nameInput}
        setNameInput={setNameInput}
        organizationInput={organizationInput}
        setOrganizationInput={setOrganizationInput}
        positionInput={positionInput}
        setPositionInput={setPositionInput}
        handleClickSave={handleClickSave}
      />
      <EmployeeTable list={list} />
    </div>
  );
};

const Form = (props) => {
  const {
    nameInput,
    setNameInput,
    organizationInput,
    setOrganizationInput,
    positionInput,
    setPositionInput,
    handleClickSave,
  } = props;

  return (
    <form style={{ display: "flex", gap: "4px" }}>
      <input
        type="text"
        placeholder="Type new name here"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type new organization here"
        value={organizationInput}
        onChange={(e) => setOrganizationInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type new position here"
        value={positionInput}
        onChange={(e) => setPositionInput(e.target.value)}
      />
      <button onClick={(e) => handleClickSave(e)}>save</button>
    </form>
  );
};

const EmployeeTable = (props) => {
  const { list } = props;

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Organization</th>
        <th>Position</th>
      </tr>
      {list.map((e, idx) => (
        <TableItem data={e} key={idx} />
      ))}
    </table>
  );
};

const TableItem = (props) => {
  const { data } = props;

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.organization}</td>
      <td>{data.position}</td>
    </tr>
  );
};

export default App;
