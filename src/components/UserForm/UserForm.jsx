import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';

export default function UserForm({ label, onSubmit }) {
  const { formState, formError, clearForm, handleFormChange, setFormError } =
    useForm({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearForm();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('An E-mail and 8+ Character Password Required.');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formState.password}
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
