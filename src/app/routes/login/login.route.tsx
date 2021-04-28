import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LoginRoute: React.FunctionComponent = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Typography component="h1">Login</Typography>

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

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default LoginRoute;
