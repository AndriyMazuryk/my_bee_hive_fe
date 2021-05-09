import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  LogoutPage,
} from "./pages";
import { Header } from "./components";

export const Routes = () => {
  return (
    <BrowserRouter>

      <Header />

      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>

    </BrowserRouter>
  );
};
