import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
  });
  const baseUrl = "http://localhost:3456/api/users";

  const fetchUsers = async () => {
    const response = await axios.get(baseUrl);
    setUsers(response.data);
    console.log(users);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateUser(formData.id);
      setEditing(!editing);
    } else {
      await axios.post(baseUrl, formData);
    }

    setFormdata({ name: "", email: "", password: "", id: "" });
    fetchUsers();
    console.log(formData);
  };

  const editUser = (element) => {
    setFormdata({
      name: element.name,
      email: element.email,
      password: element.password,
      id: element._id,
    });
    setEditing(!editing);
  };

  const updateUser = async (id) => {
    await axios.put(`${baseUrl}/${id}`, formData);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>
        Users <button onClick={fetchUsers}>load</button>
      </h1>
      {users.map((ele, index) => {
        return (
          <h2 key={ele._id}>
            {ele.name} - {ele.email}{" "}
            <button
              onClick={() => {
                editUser(ele);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteUser(ele._id);
              }}
            >
              Delete
            </button>
          </h2>
        );
      })}
      <h1>Add User Form</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name.."
          onChange={(e) => {
            setFormdata({
              ...formData,
              name: e.target.value,
            });
          }}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address..."
          onChange={(e) => {
            setFormdata({
              ...formData,
              email: e.target.value,
            });
          }}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => {
            setFormdata({
              ...formData,
              password: e.target.value,
            });
          }}
          value={formData.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Crud;
