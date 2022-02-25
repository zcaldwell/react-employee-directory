import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { Link } from 'react-router-dom';
import AuthButton from '../AuthButton/AuthButton';

export default function Header() {
  const { user, setUser } = useUser();

  return (
    <>
      <h2>Employee Directory</h2>
      {user?.email ? (
        <h3>Welcome {user}!</h3>
      ) : (
        <>
          <h3>Please Sign In</h3>
          <AuthButton />
        </>
      )}
      )
    </>
  );
}
