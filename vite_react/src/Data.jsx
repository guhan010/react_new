import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [users, setUsers] = useState([]);
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:3456/api/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3456/api/users/${id}`);
    await fetchdata();
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.length === 0 ? (
        <button onClick={fetchdata}>reload</button>
      ) : (
        users.map((ele, index) => {
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
        })
      )}
    </div>
  );
};

export default Data;
