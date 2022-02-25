import { createContext, useContext, useState, useMemo } from 'react';
import { getUser } from '../../services/users';

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('UserProvider Required');
  }
  return context;
};

export { UserProvider, useUser };
