import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import AuthButton from '../AuthButton/AuthButton';

export default function Header() {
  const { user } = useUser();

  return (
    <>
      <h2>Employee Directory</h2>
      {user?.email ? (
        <h3>Welcome {user?.email}!</h3>
      ) : (
        <>
          <h3>Please Sign In</h3>
          <AuthButton />
        </>
      )}
    </>
  );
}
