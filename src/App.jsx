import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserContext';
import Auth from './views/Auth/Auth';
import ConfirmEmail from './views/Auth/ConfirmEmail';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Profile from './components/Profile/Profile';
export default function App() {
  return (
    <UserProvider>
      <Header />
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
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
