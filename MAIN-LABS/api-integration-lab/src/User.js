import React from 'react';

function User({ user }) {
  return (
    <div className="User">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;