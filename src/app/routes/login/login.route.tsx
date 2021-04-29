import React from "react";

import { resolve } from "inversify-react";
import { AuthService } from "../../shared/services/auth/auth.service";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {
  Link as RouterLink,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";

import "./login.route.scss";

type LoginRouteState = {
  email: string;
  password: string;
  showErrorSnackbar: boolean;
};

class LoginRoute extends React.PureComponent<
  RouteComponentProps,
  LoginRouteState
> {
  @resolve(AuthService)
  private readonly authService!: AuthService;

  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showErrorSnackbar: false,
    };

    this.formHandler = this.formHandler.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }

  showAlert() {
    this.setState({ ...this.state, showErrorSnackbar: true });
  }

  hideAlert() {
    this.setState({ ...this.state, showErrorSnackbar: false });
  }

  formHandler(event: any) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  formSubmit(event: any) {
    event.preventDefault();
    this.authService
      .login(this.state.email, this.state.password)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        this.showAlert();
      });
  }

  render() {
    return (
      <div className="login-route">
        <Snackbar
          open={this.state.showErrorSnackbar}
          autoHideDuration={6000}
          onClose={this.hideAlert}
        >
          <Alert onClose={this.hideAlert} severity="error">
            Login error
          </Alert>
        </Snackbar>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>

            <form onSubmit={this.formSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                label="Email address"
                id="email"
                name="email"
                autoComplete="email"
                fullWidth
                autoFocus
                required
                onChange={this.formHandler}
              ></TextField>

              <TextField
                variant="outlined"
                margin="normal"
                label="Password"
                id="password"
                name="password"
                autoCapitalize="current-password"
                fullWidth
                required
                onChange={this.formHandler}
              ></TextField>

              <Button
                className="submit-button"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Sign In
              </Button>
            </form>
            <Link component={RouterLink} to="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(LoginRoute);
