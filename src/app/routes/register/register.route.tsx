import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const RegisterRoute: React.FunctionComponent = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1">Sign Up</Typography>

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
        </form>
      </div>
    </Container>
  );
};

export default RegisterRoute;
