import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import { ComponentType } from "react";

// interface IRouteProps {
//   path: string;
//   exact: boolean;
//   component: ComponentType<React.FC>;
// }

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
