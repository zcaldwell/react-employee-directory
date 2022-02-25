import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import { useUser } from '../../context/UserContext/UserContext';
import UserForm from '../../components/UserForm/UserForm';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const response = await signInUser(email, password);
        setUser({ id: response.id, email: response.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <main>
      <h2>{isSigningUp ? 'Welcome!' : 'Welcome Back'}</h2>
      <UserForm
        onSubmit={handleAuth}
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
      />

      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      ) : (
        <p>
          Need to Sign-up? <Link to="/register">Sign Up</Link>
        </p>
      )}
    </main>
  );
}
