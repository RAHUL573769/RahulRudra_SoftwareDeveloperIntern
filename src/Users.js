import React, { useEffect, useState } from "react";
import SingleUsers from "./SingleUsers";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = (event) => {
    const searchName = event.target.value;
    const match = users.filter((n) => n.name.includes(searchName));
    setSearchResult(match);
  };
  const handleEmailSearchChange = (event) => {
    const searchEmail = event.target.value;
    const match = users.filter((n) => n.email.includes(searchEmail));
    setSearchResult(match);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {console.log(users)}
      <div style={{ margin: "20px", textAlign: "center" }}>
        <input
          onChange={handleSearchChange}
          type="text"
          id=""
          placeholder="Enter Name"
        />
        <input
          onChange={handleEmailSearchChange}
          type="email"
          name=""
          id=""
          placeholder="Enter Email"
        />
      </div>
      <div className="container">
        {searchResult.map((user) => (
          <SingleUsers key={user.id} user={user}></SingleUsers>
        ))}
      </div>
    </div>
  );
};

export default Users;
