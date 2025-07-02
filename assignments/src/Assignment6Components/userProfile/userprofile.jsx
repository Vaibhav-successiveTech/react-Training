'use client';
import React from 'react';

function UserProfile({ name, email, phone }) {
  return (
    <div data-testid="user-profile">
      <h2>{name}</h2>
      <p>Email: <span>{email}</span></p>
      <p>Phone: <span>{phone}</span></p>
    </div>
  );
}

export default UserProfile;