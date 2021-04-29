import React from "react";

import { resolve } from "inversify-react";
import { MessagesService } from "../../shared/services/messages/messages.service";
import { AuthService } from "../../shared/services/auth/auth.service";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { MessageComponent } from "../../shared/components/message/message.component";
import { RouteComponentProps } from "react-router";

import "./home.route.scss";

type HomeRouteState = {
  isFetching: boolean;
  messages: Array<any>;
};

export default class HomeRoute extends React.PureComponent<
  RouteComponentProps,
  HomeRouteState
> {
  @resolve(MessagesService)
  private readonly messagesService!: MessagesService;
  @resolve(AuthService)
  private readonly authService!: AuthService;

  componentDidMount() {
    const messageObservableStream = this.messagesService.onMessage();

    messageObservableStream.subscribe((m: any) => {
      let messages = this.state.messages;

      this.setState({ messages: [m, ...messages] });
    });
  }

  componentWillUnmount() {
    this.messagesService.disconnect();
  }

  constructor(props: any) {
    super(props);
    this.state = {
      isFetching: false,
      messages: [],
    };

    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.authService.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="home-route">
        <AppBar position="static" className="appbar-home">
          <Toolbar>
            <Typography variant="h6">Kafka Queue</Typography>
          </Toolbar>
          <div>
            <IconButton aria-label="logout" onClick={this.handleLogout}>
              <ExitToAppIcon color="secondary" />
            </IconButton>
          </div>
        </AppBar>

        <Container component="main">
          <CssBaseline />
          {this.state.messages.map((item, key) => (
            <MessageComponent message={item} key={key}></MessageComponent>
          ))}
        </Container>
      </div>
    );
  }
}
