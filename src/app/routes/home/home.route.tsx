import React from "react";

import { resolve } from "inversify-react";
import { MessagesService } from "../../shared/services/messages/messages.service";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MessageComponent } from "../../shared/components/message/message.component";

import "./home.route.scss";

type HomeRouteState = {
  isFetching: boolean;
  messages: Array<any>;
};

export default class HomeRoute extends React.PureComponent<
  any,
  HomeRouteState
> {
  @resolve(MessagesService)
  private readonly messagesService!: MessagesService;

  constructor(props: any) {
    super(props);
    this.state = {
      isFetching: false,
      messages: [],
    };
  }

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

  render() {
    return (
      <div className="home-route">
        <AppBar position="static" className="appbar-home">
          <Toolbar>
            <Typography variant="h6">Kafka Queue</Typography>
          </Toolbar>
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
