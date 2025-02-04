import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [users, setUsers] = useState([]);
  // const fetchdata = async () => {
  //   const response = await axios.get("http://localhost:3456/api/users");
  //   console.log(response);
  //   setUsers(response.data);
  // };

  const fetchdata = () => {
    axios
      .get("http://localhost:3456/api/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3456/api/users/${id}`);
    await fetchdata();
  };

  const loadUsers = () => {
    fetchdata();
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <button onClick={loadUsers}>reload</button>

      {users.map((ele, index) => {
        return (
          <div key={ele._id}>
            {ele.name} - {ele.email}{" "}
            <button
              onClick={() => {
                deleteUser(ele._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
