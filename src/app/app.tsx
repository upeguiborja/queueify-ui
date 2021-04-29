import "reflect-metadata";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "inversify-react";
import { container } from "./shared/services/container";

import CircularProgress from "@material-ui/core/CircularProgress";

import "./app.scss";

//Routes
const LoginRoute = React.lazy(() => import("./routes/login/login.route"));
const RegisterRoute = React.lazy(
  () => import("./routes/register/register.route")
);
const HomeRoute = React.lazy(() => import("./routes/home/home.route"));

function App() {
  return (
    <Provider container={container}>
      <div>
        <Router>
          <Suspense fallback={<CircularProgress />}>
            <Switch>
              <Route exact path="/" component={HomeRoute} />
              <Route exact path="/login" component={LoginRoute} />
              <Route exact path="/register" component={RegisterRoute} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
