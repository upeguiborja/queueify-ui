import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import "./register.route.scss";

const RegisterRoute: React.FunctionComponent = () => {
  return (
    <div className="register-route">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form>
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
};

export default RegisterRoute;
