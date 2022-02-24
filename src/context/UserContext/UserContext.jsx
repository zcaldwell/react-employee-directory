import { createContext, useContext, useState } from 'react';

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const {
    currentUser: { id, email },
  } = getUser();
  const [user, setUser] = useState(currentUser ? { id: id, email: email } : {});

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
