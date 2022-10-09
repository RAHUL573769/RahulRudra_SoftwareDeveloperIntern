import React from "react";
import "./single.css";
const SingleUsers = ({ user }) => {
  const { name, username, email, phone } = user;
  return (
    <div className="activity">
      <h1>{name}</h1>
      <h3>User Name:{username}</h3>
      <p>
        Email:{email}
        <br />
        Phone:{phone}
      </p>
    </div>
  );
};

export default SingleUsers;
