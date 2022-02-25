import { createContext, useContext, useState, useMemo } from 'react';
import { getProfile } from '../../services/profiles';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState(
    currentProfile ? { id: currentProfile.id, email: currentProfile.email } : {}
  );

  const value = useMemo(() => ({ profile, setProfile }), [profile]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('ProfileProvider Required');
  }
  return context;
};

export { ProfileProvider, useProfile };
