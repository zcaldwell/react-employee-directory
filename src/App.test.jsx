import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext/UserContext';

test('just to pass github', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  const button = screen.getByText(/sign up/i);
});
