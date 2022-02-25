import React from 'react';
import { useUser } from '../../context/UserContext/UserContext';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/users';

export default function Header() {
  const { user, setUser } = useUser();

  return (
    <>
      <div>
        <h2>Employee Directory</h2>
        {user ? (
          <div>
            <h4>Not Signed In</h4>
            <button
              onClick={async () => {
                await signOutUser();
                setUser({});
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <h4>Welcome {user}!</h4>{' '}
            <Link to="./login">
              <button>Sign In</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
