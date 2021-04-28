import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MessageComponent } from "../../shared/components/message/message.component";

import "./home.route.scss";

const messages = [
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur velit lacus, non tempus dui blandit ut. Phasellus porta molestie dictum. Nullam rutrum faucibus faucibus. Nullam ullamcorper fermentum sem ac facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis fermentum rhoncus nisl, volutpat venenatis mauris tempus sed. Fusce vulputate, tortor ac sagittis scelerisque, tellus velit aliquam est, non faucibus lacus augue finibus erat. Morbi varius lacus nec nibh semper mollis. Maecenas efficitur nibh ac eros varius hendrerit. Proin in cursus odio. Praesent quis commodo est, sed rhoncus nisi. Donec id egestas magna. Fusce tempus eget nunc eu vestibulum.",
  },
  {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur velit lacus, non tempus dui blandit ut. Phasellus porta molestie dictum. Nullam rutrum faucibus faucibus. Nullam ullamcorper fermentum sem ac facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis fermentum rhoncus nisl, volutpat venenatis mauris tempus sed. Fusce vulputate, tortor ac sagittis scelerisque, tellus velit aliquam est, non faucibus lacus augue finibus erat. Morbi varius lacus nec nibh semper mollis. Maecenas efficitur nibh ac eros varius hendrerit. Proin in cursus odio. Praesent quis commodo est, sed rhoncus nisi. Donec id egestas magna. Fusce tempus eget nunc eu vestibulum.",
  },
];

const HomeRoute: React.FunctionComponent = () => {
  return (
    <div className="home-route">
      <AppBar position="static" className="appbar-home">
        <Toolbar>
          <Typography variant="h6">Kafka Queue</Typography>
        </Toolbar>
      </AppBar>

      <Container component="main">
        <CssBaseline />
        {messages.map((item, key) => (
          <MessageComponent message={item.message} key={key}></MessageComponent>
        ))}
      </Container>
    </div>
  );
};

export default HomeRoute;
