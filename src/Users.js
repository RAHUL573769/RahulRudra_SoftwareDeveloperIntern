import React, { useEffect, useState } from "react";
import SingleUsers from "./SingleUsers";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container">
      {users.map((user) => (
        <SingleUsers key={user.id} user={user}></SingleUsers>
      ))}
    </div>
  );
};

export default Users;
