import React from "react";

const Card = ({ users }) => {
  return (
    <>
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{users.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{users.id}</h6>
          <p className="card-text">{users.body}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
