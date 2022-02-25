import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { updateProfile, createProfile } from '../../services/profiles';
import { useUser } from '../../context/UserContext/UserContext';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useProfile } from '../../context/ProfileContext/ProfileContext';

export default function CreateProfile({ isCreatingProfile = false }) {
  const { user } = useUser();
  const { setProfile } = useProfile();
  const history = useHistory();

  const handleProfile = async (name, email, birthday, bio) => {
    try {
      if (isCreatingProfile) {
     await createProfile(name, email, birthday, bio);
    history.push('/profile');
      } else {
        const reponse = await 
    } catch (error) {
      throw error;
    }
  };
  return <div>CreateProfile</div>;
}
