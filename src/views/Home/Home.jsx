import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext/UserContext';

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <h1>Welcome to the Employee Directory</h1>
      <p>Please Create an Account to Log In</p>
      {user?.email ? (
        <Link to="/profile">View Your Profile</Link>
      ) : (
        <>
          <Link to="/register">Create Account</Link>
          {'or'}
          <Link to="/login">Sign In</Link>{' '}
        </>
      )}
      )
    </>
  );
}
