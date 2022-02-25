import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { signOutUser } from '../../services/users';
import { Link } from 'react-router-dom';

export default function AuthButton() {
  const { user, setUser } = useUser();

  return (
    <>
      {user?.email ? (
        <button
          onClick={async () => {
            await signOutUser();
            setUser({});
          }}
        >
          Sign Out
        </button>
      ) : (
        <div>
          <Link to="./login">
            <button>Sign In</button>
          </Link>
        </div>
      )}
    </>
  );
}
