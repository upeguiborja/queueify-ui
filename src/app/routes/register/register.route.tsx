import React from "react";

import { resolve } from "inversify-react";
import { AuthService } from "../../shared/services/auth/auth.service";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, RouteComponentProps } from "react-router-dom";

import "./register.route.scss";

type RegisterRouteState = {
  email: string;
  password: string;
};

class RegisterRoute extends React.PureComponent<
  RouteComponentProps,
  RegisterRouteState
> {
  @resolve(AuthService)
  private readonly authService!: AuthService;

  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.formHandler = this.formHandler.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formHandler(event: any) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  formSubmit(event: any) {
    event.preventDefault();
    console.log(this.state.email);
    this.authService
      .register(this.state.email, this.state.password)
      .then((res) => {
        this.props.history.push("/login");
      })
      .catch((err) => {
        console.error("Error in registration");
      });
  }

  render() {
    return (
      <div className="register-route">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Typography component="h1" variant="h5">
              Sign Up
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
                Sign Up
              </Button>
            </form>
            <Link component={RouterLink} to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default RegisterRoute;
