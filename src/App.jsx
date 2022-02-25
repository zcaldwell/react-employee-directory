import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserContext';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Home from './views/Home/Home';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp={true} />
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
