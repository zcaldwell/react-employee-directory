import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserContext';
import Auth from './views/Auth/Auth';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
