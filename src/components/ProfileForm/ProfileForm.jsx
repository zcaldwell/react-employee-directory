import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function ProfileForm({ label, onSubmit }) {
  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm({ name: '', email: '', birthday: '', bio: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearForm();
  }, []);

  const handleSubmit = async (e) => {
    e.prevent.default();
    const { name, email, birthday, bio } = formState;

    try {
      setFormError('');
      setLoading(true);
      await onSubmit(name, email, birthday, bio);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label>Name</label>
        <input
          id="name"
          type="name"
          name="name"
          value={formState.name}
          onChange={handleFormChange}
        />
      </section>
      <section>
        <label>Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleFormChange}
        />
      </section>
      <section>
        <label>Birthday</label>
        <input
          id="birthday"
          type="date"
          name="birthday"
          value={formState.birthday}
          onChange={handleFormChange}
        />
      </section>
      <section>
        <label>Bio</label>
        <textarea
          id="bio"
          type="text"
          name="bio"
          value={formState.bio}
          onChange={handleFormChange}
        />
      </section>
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : label}
      </button>
      {formError && <p>{formError}</p>}
    </form>
  );
}
